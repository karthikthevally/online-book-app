import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserComponent } from './admin-user.component';

const routes: Routes = [
  { path: 'admin', component: AdminUserComponent }
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
