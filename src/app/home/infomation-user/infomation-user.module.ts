import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfomationUserComponent } from './infomation-user.component';
import { EditInformationComponent } from '../edit-information/edit-information.component';

const routes: Routes = [
  {

  //  path: '',
  //  component: InfomationUserComponent,
  //   children: [
  //     {path: 'editinfomation', component:EditInformationComponent}
  //   ]
  }
 ];


@NgModule({
  declarations: [
    // EditInformationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class InfomationUserModule { }
