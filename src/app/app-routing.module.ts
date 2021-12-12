import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    component:LoginComponent,
    loadChildren:() => import('./login/login.module').then (m => m.LoginModule)
  },
  {
    path: 'admin',
    loadChildren:() => import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: '**',
    component:NotFoundComponent,
  }
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
