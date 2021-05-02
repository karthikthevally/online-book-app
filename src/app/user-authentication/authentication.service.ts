import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { user } from "./../data-format/user";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class AuthenticationService {
  private user: BehaviorSubject<user>;
  public currentUser: Observable<user>;

  constructor(private http: HttpClient, 
  ) {
    this.user = new BehaviorSubject(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.user.asObservable();
  }
  public login(username: string, password: string):Observable<any> {
    return this.http.post(`/users/authenticate`, { username, password }).pipe(
      map((user: any) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.user.next(user);
        return user;
      })
    );
  }
  public logout() {
    localStorage.removeItem("currentUser");
    this.user.next(null);
  }
  public get currentUserValue(): user {
    return this.user.value;
  }
}
