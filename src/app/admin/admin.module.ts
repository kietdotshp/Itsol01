import { ModalEditComponent } from 'src/app/modal/modal-edit/modal-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RecruitmentDetailComponent } from './recruitment/recruitment-detail/recruitment-detail.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';


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
        path: 'profile-detail/:id',
        component: ProfileDetailComponent,
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
    ModalEditComponent,
    RecruitmentDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    PaginationModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
})
export class AdminModule { }
