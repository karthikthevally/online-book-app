import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GuestUserComponent } from './guest-user/guest-user.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { fakeBackendProvider } from './data-format/backend-data.interceptor';
import { ErrorInterceptor } from './user-authentication/http-error.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './user-authentication/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuestUserComponent,
    AdminUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [AuthenticationService,
              { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
              fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
