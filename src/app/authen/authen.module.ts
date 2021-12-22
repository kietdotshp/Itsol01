import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenComponent } from './authen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { OtpComponent } from './otp/otp.component';
const AuthenRoutes: Routes = [
  {
    path: '',
    component: AuthenComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
     
      {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full'
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,

      },
    ],
  }

];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenRoutes)
  ]
})
export class AuthenModule { }
