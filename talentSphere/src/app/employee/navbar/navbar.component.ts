import { Component, EventEmitter, Output } from '@angular/core';

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