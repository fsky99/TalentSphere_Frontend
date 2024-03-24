import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { AdminaddemployeeComponent } from './admin/pages/adminaddemployee/adminaddemployee.component';
import { AdmindashboardComponent } from './admin/pages/admindashboard/admindashboard.component';
import { AdmineventsComponent } from './admin/pages/adminevents/adminevents.component';
import { AdmindirectoryComponent } from './admin/pages/admindirectory/admindirectory.component';
import { AdminremunerationsComponent } from './admin/pages/adminremunerations/adminremunerations.component';
import { AdminactivitiesComponent } from './admin/pages/adminactivities/adminactivities.component';
import { AdminmessagesComponent } from './admin/pages/adminmessages/adminmessages.component';
import { AdminrequestsComponent } from './admin/pages/adminrequests/adminrequests.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'employee-home', component: EmployeehomeComponent },
  { path: 'admin-add-employee', component: AdminaddemployeeComponent },
  { path: 'admin-dashboard', component: AdmindashboardComponent },
  { path: 'admin-events', component: AdmineventsComponent },
  { path: 'admin-directory', component: AdmindirectoryComponent },
  { path: 'admin-remuneration', component: AdminremunerationsComponent },
  {path: 'admin-activities', component: AdminactivitiesComponent},
  {path: 'admin-messages', component: AdminmessagesComponent},
  {path:'admin-requests', component:AdminrequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
