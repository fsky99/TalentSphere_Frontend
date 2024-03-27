import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { AdmindashboardComponent } from './admin/pages/admindashboard/admindashboard.component';
import { AdmineventsComponent } from './admin/pages/adminevents/adminevents.component';
import { AdmindirectoryComponent } from './admin/pages/admindirectory/admindirectory.component';
import { AdminremunerationsComponent } from './admin/pages/adminremunerations/adminremunerations.component';
import { AdminactivitiesComponent } from './admin/pages/adminactivities/adminactivities.component';
import { AdminmessagesComponent } from './admin/pages/adminmessages/adminmessages.component';
import { AdminrequestsComponent } from './admin/pages/adminrequests/adminrequests.component';
import { AdminAddEmployeeComponent } from './admin/pages/adminaddemployee/adminaddemployee.component';
import { MasterProfileComponent } from './admin/pages/masterprofile/masterprofile.component';
import { EmployeedirectoryComponent } from './employeedirectory/employeedirectory.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EmployeeDashComponent } from './employee/employee-dash/employee-dash.component';
import { EmployeeEventsComponent } from './employee/employee-events/employee-events.component';
import { EmployeeRemunerationComponent } from './employee/employee-remuneration/employee-remuneration.component';
import { AdminaddeventComponent } from './admin/components/adminaddevent/adminaddevent.component';
import { AdminActivityComponent } from './admin/pages/admin-activity/admin-activity.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'employee-home', component: EmployeehomeComponent },
  { path: 'admin-add-employee', component: AdminAddEmployeeComponent },
  { path: 'admin-dashboard', component: AdmindashboardComponent },
  { path: 'admin-events', component: AdmineventsComponent },
  { path: 'admin-directory', component: AdmindirectoryComponent },
  { path: 'admin-remuneration', component: AdminremunerationsComponent },
  { path: 'admin-activities', component: AdminactivitiesComponent },
  { path: 'admin-messages', component: AdminmessagesComponent },
  { path: 'admin-requests', component: AdminrequestsComponent },
  { path: 'master-profile', component: MasterProfileComponent },
  {path: 'admin-activity' , component: AdminActivityComponent},

  { path: 'employee-directory', component: EmployeedirectoryComponent },
  { path: 'view-profile', component: ViewprofileComponent },
  { path: 'employee-dashboard', component: EmployeeDashComponent },
  { path: 'employee-events', component: EmployeeEventsComponent },
  { path: 'employee-remuneration', component: EmployeeRemunerationComponent },
  { path: 'admin-add-event', component: AdminaddeventComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
