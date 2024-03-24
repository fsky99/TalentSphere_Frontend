import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { AdminaddemployeeComponent } from './admin/pages/adminaddemployee/adminaddemployee.component';
import { AdmindashboardComponent } from './admin/pages/admindashboard/admindashboard.component';
import { AdmineventsComponent } from './admin/pages/adminevents/adminevents.component';
import { AdmindirectoryComponent } from './admin/pages/admindirectory/admindirectory.component';
import { AdminremunerationsComponent } from './admin/pages/adminremunerations/adminremunerations.component';
import { EmployeeDashComponent } from './employee/employee-dash/employee-dash.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'employee-home', component: EmployeehomeComponent },
  { path: 'admin-add-employee', component: AdminaddemployeeComponent },
  { path: 'admin-dashboard', component: AdmindashboardComponent },
  { path: 'admin-events', component: AdmineventsComponent },
  { path: 'admin-directory', component: AdmindirectoryComponent },
  { path: 'admin-remuneration', component: AdminremunerationsComponent },
  { path: 'employee-dashboard', component: EmployeeDashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
