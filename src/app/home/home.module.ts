import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ListJobComponent } from './list-job/list-job.component';
import { DetailJobComponent } from './list-job/detail-job/detail-job.component';
import { HomePageComponent } from './home-page/home-page.component';

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
      }

    ]
  }
 ];

@NgModule({
  declarations: [
    HomeComponent,
    ListJobComponent,
    DetailJobComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
