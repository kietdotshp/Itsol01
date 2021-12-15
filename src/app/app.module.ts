import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { RecruitmentComponent } from './admin/recruitment/recruitment.component';
import { ChangePasswordComponent } from './authen/change-password/change-password.component';
import { OtpComponent } from './authen/otp/otp.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, Routes } from '@angular/router';
import { MessageComponent } from './authen/message/message.component';
import { LoginComponent } from './authen/login/login.component';
import { AuthenComponent } from './authen/authen.component';
import { EmployeeListComponent } from './authen/employee-list/employee-list.component';
import { RegisterComponent } from './authen/register/register.component';
import { EmployeeAddComponent } from './authen/employee-add/employee-add.component';
// import { AuthInterceptor } from './interceptor/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    // HeaderComponent,
    // FooterComponent,
    // HomeComponent,
    LoginComponent,
    RegisterComponent,
    // JobDetailComponent,
    // RecruitmentComponent,
    // ContactComponent,
    // ListJobComponent,
    // PersonalInfoComponent,
    // UserComponent,
     AuthenComponent,
    // AdminComponent,
    MessageComponent,
    EmployeeAddComponent,
    ChangePasswordComponent,
    EmployeeListComponent,
    OtpComponent
    // RecruitmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    // {
    //   // provide: HTTP_INTERCEPTORS,
    //   // useClass: AuthInterceptor,
    //   // multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})

// const routes: Routes=[
//   { path: 'phones', component: ItemsListComponent },
//   { path: 'phones/:id/edit', component: ItemFormComponent },
//   { path: 'phones/new', component: ItemFormComponent },
//   { path: 'cart', component: CartComponent }
// ]
export class AppModule { }
