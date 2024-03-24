import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidebarOpen = false;
  @Output() sidebarState = new EventEmitter<boolean>();
  isButtonActive = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarState.emit(this.isSidebarOpen);
  }

  toggleColor() {
    this.isButtonActive = !this.isButtonActive;
  }
}