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
import { StatuspopupComponent } from './admin/components/statuspopup/statuspopup.component';

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
    StatuspopupComponent
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
