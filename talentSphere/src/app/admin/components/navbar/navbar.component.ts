import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { StatuspopupComponent } from '../statuspopup/statuspopup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidebarOpen = false;
  isButtonActive = false;
  userType: string | null = localStorage.getItem('type'); // Add this line
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
