import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { StatuspopupComponent } from '../statuspopup/statuspopup.component';
import { TalentService } from '../../../talent.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 fname:any
 lname : any
 email:any
  ngOnInit(){
    this.fname = localStorage.getItem('fname')
    this.lname = localStorage.getItem('lname')  
    this.email = localStorage.getItem('email')
  }
  // fname = localStorage.getItem('fname')
  // lname = localStorage.getItem('lname')  
  // email = localStorage.getItem('email')
  isSidebarOpen = false;
  isButtonActive = false;
  userType: string | null = localStorage.getItem('type'); 
  @Output() sidebarState = new EventEmitter<boolean>();
  @ViewChild(StatuspopupComponent) statusPopup!: StatuspopupComponent;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarState.emit(this.isSidebarOpen);
  }

  toggleColor() {
    this.isButtonActive = !this.isButtonActive;
  }

  toggleStatusPopup() {
    this.statusPopup.togglePopup();
  }
}
