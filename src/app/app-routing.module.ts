import { NgModule } from '@angular/core';
import { OtpComponent } from './authen/otp/otp.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './home/home.component';
import { Forgotpassword } from './model/forgotPassword';
import { ChangePasswordComponent } from './authen/change-password/change-password.component';
import { RegisterComponent } from './authen/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeListComponent } from './authen/employee-list/employee-list.component';

import { EmployeeAddComponent } from './authen/employee-add/employee-add.component';
import { AuthenComponent } from './authen/authen.component';
import { LoginComponent } from './authen/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
//   {
//     path: 'login',
//     component:LoginComponent,
//     loadChildren:() => import('./login/login.module').then (m => m.LoginModule)
//   },
  {
    path: 'authen',
    component:AuthenComponent,
    loadChildren: () => import("src/app/authen/authen.module").then((m) => m.AuthenModule)
},
{
  path: 'employee-add', component:EmployeeAddComponent
},
{
  path: 'employee-list', component:EmployeeListComponent
},
{
  path: 'login', component:LoginComponent
},
{
  path: 'change-password', component:ChangePasswordComponent
},
{
  path: 'otp', component:OtpComponent
},
  {
    path: 'admin',
    loadChildren:() => import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: '**',
    component:NotFoundComponent,
  }
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
