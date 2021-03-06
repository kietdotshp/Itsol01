import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ListJobComponent } from './list-job/list-job.component';
import { DetailJobComponent } from './list-job/detail-job/detail-job.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from 'primeng/table';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopupComponent } from './list-job/detail-job/popup/popup.component';
import { InfomationUserComponent } from './infomation-user/infomation-user.component';
import { EditInformationComponent } from './edit-information/edit-information.component';
import { HttpClientModule } from '@angular/common/http';
import { ListJeComponent } from '../admin/list-Je/list-je.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  {

    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'list-job',
        component: ListJobComponent,
      },
      {
        path:'detail-job/:id',
        component:DetailJobComponent,
      },
      {
        path:'popup',
        component:PopupComponent,
      },
      {
        path: 'infomation/:id',
        component:InfomationUserComponent,
      },
      {
        path:'editinfomation/:id',
        component:EditInformationComponent
      },
      {
        path:'upload',
        component:UploadComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ListJobComponent,
    DetailJobComponent,
    HomePageComponent,
    ProfileComponent,
    PopupComponent,
    InfomationUserComponent,
    EditInformationComponent,
    UploadComponent

  ],


  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSliderModule,
    MatTableModule,
    TableModule,
    PaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserModule,
     HttpClientModule
  ]
})
export class HomeModule { }
