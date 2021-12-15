import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ListJobComponent } from './list-job/list-job.component';
import { DetailJobComponent } from './list-job/detail-job/detail-job.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { InfomationUserComponent } from './infomation-user/infomation-user.component';
import { EditInformationComponent } from './edit-information/edit-information.component';

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
        component:ListJobComponent,
      },
      {
        path: 'infomation/:id',
        component:InfomationUserComponent,
      },
      {
        path:'editinfomation',
        component:EditInformationComponent
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
    InfomationUserComponent,
    EditInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
