import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { AdminListComponent } from './admin-list/admin-list.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { EditCompanyComponent } from './contact/edit-company/edit-company.component';
import { FormsModule } from '@angular/forms';
import { RecruitmentComponent } from './recruitment/recruitment.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'admin-list',
        component: AdminListComponent,
      },
      {
        path: 'home',
        component: AdminHomeComponent,
      },
      {
        path: 'recruitment',
        component: RecruitmentComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    AdminHomeComponent,
    // RecruitmentComponent,
    AdminListComponent,
    ContactComponent,
    ProfileComponent,
    AdminComponent,
    RecruitmentComponent,
    ProfileDetailComponent,
    EditCompanyComponent,
  ],
  imports: [  CommonModule, RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],
})
export class AdminModule {}
