import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrhomeComponent } from './hrhome/hrhome.component';
import { LoginComponent } from './login/login.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './admin/components/navbar/navbar.component';
import { FooterComponent } from './admin/components/footer/footer.component';
import { AdmindashboardComponent } from './admin/pages/admindashboard/admindashboard.component';
import { AdmindirectoryComponent } from './admin/pages/admindirectory/admindirectory.component';
import { AdminremunerationsComponent } from './admin/pages/adminremunerations/adminremunerations.component';
import { AdmineventsComponent } from './admin/pages/adminevents/adminevents.component';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeDashComponent } from './employee/employee-dash/employee-dash.component';
import { AdminrequestsComponent } from './admin/pages/adminrequests/adminrequests.component';
import { AdminmessagesComponent } from './admin/pages/adminmessages/adminmessages.component';
import { AdminactivitiesComponent } from './admin/pages/adminactivities/adminactivities.component';
import { AdminAddEmployeeComponent } from './admin/pages/adminaddemployee/adminaddemployee.component';
import { MasterProfileComponent } from './admin/pages/masterprofile/masterprofile.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { EmployeeEventsComponent } from './employee/employee-events/employee-events.component';
import { EmployeeRemunerationComponent } from './employee/employee-remuneration/employee-remuneration.component';
import { EmployeeDirectoryComponent } from './employee/employee-directory/employee-directory.component';
=======
import { StatuspopupComponent } from './admin/components/statuspopup/statuspopup.component';
import { EmployeedirectoryComponent } from './employeedirectory/employeedirectory.component';
import { AdminaddeventComponent } from './adminaddevent/adminaddevent.component';
>>>>>>> a9094bc5790e4f39f662fadd2b13ec1e0619067c
=======

import { EmployeeEventsComponent } from './employee/employee-events/employee-events.component';
import { EmployeeRemunerationComponent } from './employee/employee-remuneration/employee-remuneration.component';
import { EmployeeDirectoryComponent } from './employee/employee-directory/employee-directory.component';

import { StatuspopupComponent } from './admin/components/statuspopup/statuspopup.component';
import { EmployeedirectoryComponent } from './employeedirectory/employeedirectory.component';
import { AdminaddeventComponent } from './adminaddevent/adminaddevent.component';

>>>>>>> c88b05f6a9380b0faa51ee3ca300780e773db3da

@NgModule({
  declarations: [
    AppComponent,
    HrhomeComponent,
    LoginComponent,
    EmployeehomeComponent,
    NavbarComponent,
    FooterComponent,
    AdmindashboardComponent,
    AdmindirectoryComponent,
    AdminremunerationsComponent,

    AdmineventsComponent,
    EmployeeDashComponent,
    AdminrequestsComponent,
    AdminmessagesComponent,
    AdminactivitiesComponent,
    AdminAddEmployeeComponent,
    MasterProfileComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    EmployeeEventsComponent,
    EmployeeRemunerationComponent,
    EmployeeDirectoryComponent
=======
    StatuspopupComponent,
    EmployeedirectoryComponent,
    AdminaddeventComponent
>>>>>>> a9094bc5790e4f39f662fadd2b13ec1e0619067c
=======

    EmployeeEventsComponent,
    EmployeeRemunerationComponent,
    EmployeeDirectoryComponent,

    StatuspopupComponent,
    EmployeedirectoryComponent,

>>>>>>> c88b05f6a9380b0faa51ee3ca300780e773db3da
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule, 
    HttpClientModule,

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
