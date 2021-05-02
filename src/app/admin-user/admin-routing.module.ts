import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './admin-user.component';
import { AdminAuthdGuard } from '../user-authentication/admin.auth.guard';


const routes: Routes = [
  { path: 'admin', component: AdminUserComponent, canActivate: [AdminAuthdGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AdminRoutingModule { }
