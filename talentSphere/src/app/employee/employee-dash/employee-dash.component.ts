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
 employeeJobInfo:any=[]
 combinedData: any = [];

  getData(){
  this.talent.getAllUsers().subscribe((res:any)=>{
    this.usersData = res.data
    this.combineData()

  })
  this.talent.getEmployeeLeaves().subscribe((res:any)=>{
    this.leaves = res.data
    this.combineData()

  })
  this.talent.getAllActivities().subscribe((res:any)=>{
    this.activities = res.data
  })
  this.myActivities = this.activities.find((res:any)=>res.userID === localStorage.getItem('id'))
 this.talent.getAllEvents().subscribe((res:any)=>{
  this.events = res.data
 })
 this.talent.getEmployeejobinfo().subscribe((res:any)=>{
  this.employeeJobInfo = res.data
  this.combineData()

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
  combineData() {
    
    if (this.usersData.length > 0 && this.leaves.length > 0 && this.employeeJobInfo.length > 0) {
  
      this.combinedData = [];
      // const empLea : any =[]
      this.usersData.forEach((user: any) => {
       
        const emplJIfo = this.employeeJobInfo.find((job: any) => job.userID === user.id);
        const leaves = this.leaves.filter((leave:any)=>leave.userID === user.id)
        if(leaves && leaves.length >0){
          this.combinedData.push({ ...user, emplJIfo ,leaves });
        }
      });

      console.log(this.combinedData);
    }
  }


}
