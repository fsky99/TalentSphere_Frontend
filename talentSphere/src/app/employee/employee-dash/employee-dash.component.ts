import { Component } from '@angular/core';
import { TalentService } from '../../talent.service';

@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrl: './employee-dash.component.css'
})
export class EmployeeDashComponent {
constructor(private talent : TalentService){
  this.getData()
}


 usersData:any =[]
 events:any=[]
 leaves:any=[]
 activities:any =[]
 myActivities:any =[]

  getData(){
  this.talent.getAllUsers().subscribe((res:any)=>{
    this.usersData = res.data
  })
  this.talent.getEmployeeLeaves().subscribe((res:any)=>{
    this.leaves = res.data
  })
  this.talent.getAllActivities().subscribe((res:any)=>{
    this.activities = res.data
  })
  this.myActivities = this.activities.find((res:any)=>res.userID === localStorage.getItem('id'))
 this.talent.getAllEvents().subscribe((res:any)=>{
  this.events = res.data
 })

  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  formatTime(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }



}
