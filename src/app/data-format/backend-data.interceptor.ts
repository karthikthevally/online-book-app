import { Injectable } from "@angular/core";
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";
import { user } from "./user";
import { login } from './data';

const users: user[] = login;
// [
//   { id: '1', username: "test", name: "XYZ Name", password: "test" },
//   { id: '2', username: "test2", name: "AbC Name", password: "test2" }
//];
// let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      if (url.endsWith("/users/authenticate") && method === "POST") {
        return authenticate();
      }
      return next.handle(request);
    }

    function authenticate() {
      const { username, password } = body;
      const user = users.find(
        x => x.username == username && x.password == password
      );
      if (!user) return error("Username or password is incorrect");
      return ok({
        username: user.username
      });
    }

    

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: "Unauthorised" } });
    }

    function isLoggedIn() {
      return (
        headers.get("Authorization") === `Basic ${window.btoa("test:test")}`
      );
    }
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: BackendInterceptor,
  multi: true
};
