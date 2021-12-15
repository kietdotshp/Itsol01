import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { RecruitmentComponent } from './admin/recruitment/recruitment.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, Routes } from '@angular/router';
// import { AuthInterceptor } from './interceptor/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    // RecruitmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule
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
