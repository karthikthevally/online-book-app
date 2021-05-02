import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GuestUserComponent } from './guest-user/guest-user.component';
import { AuthdGuard } from './user-authentication/auth.guard';
import { AdminRoutingModule } from './admin-user/admin-routing.module';

const routes: Routes = [
  { path: 'guestUser', component: GuestUserComponent, canActivate: [AuthdGuard]},
  { path: 'login', component: LoginComponent },
  { path : '', component : LoginComponent},
  { path : '**', component : LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminRoutingModule

  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
