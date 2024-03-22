import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrhomeComponent } from './hrhome/hrhome.component';
import { LoginComponent } from './login/login.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';

const routes: Routes = [
  {path:'', pathMatch: 'full' , redirectTo: 'login'},
  {path: 'login' , component: LoginComponent},
  {path:'hrhome' , component:HrhomeComponent},
  {path:'employeehome' , component:EmployeehomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
