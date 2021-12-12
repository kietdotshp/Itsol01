import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { PrimengModule } from 'src/app/primeng.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
   path: 'editcompany',
   component: EditCompanyComponent
  },
  // {
  //   path: '',
  //   component: ContactComponent,
  //   children: [
  //     {
  //       path: 'editcompany',
  //       component: EditCompanyComponent,
  //     },
  //   ]
  // }
];

@NgModule({
  declarations: [
   EditCompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimengModule,
    FormsModule
  ]
})
export class ContactModule { }
