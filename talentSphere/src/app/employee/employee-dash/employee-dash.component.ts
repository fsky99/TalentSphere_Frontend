import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../talent.service';

@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrl: './employee-dash.component.css'
})
export class EmployeeDashComponent implements OnInit {
constructor(private talent : TalentService){
}

 userId :any 

 usersData:any =[]
 events:any=[]
 leaves:any=[]
 activities:any =[]
 myActivities:any =[]
 employeeJobInfo:any=[]
 combinedData: any = [];
 ngOnInit(): void {
  const userId = localStorage.getItem('id');
  if (userId) {
    this.userId = userId;
    this.getData();
  } else {
    console.error('User ID not found in localStorage');
  
  }
}
 async getData(){
    console.log('localStorage:', localStorage);

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
    this.combineData()

  })
  this.myActivities = this.activities.find((res: any) => res.userID === this.userId);

  this.myActivities = this.activities.find((res:any)=>res.userID === localStorage.getItem('id'))
 this.talent.getAllEvents().subscribe((res:any)=>{
  this.events = res.data
 })
 this.talent.getEmployeejobinfo().subscribe((res:any)=>{
  this.employeeJobInfo = res.data
  this.combineData()

 })
 this.talent.getUserActivity(localStorage.getItem('id')).subscribe((res:any)=>{
  this.myActivities = [res.data]
  console.log('my activity' + this.myActivities)
 })
 this.talent.getUserActivity(this.userId).subscribe((res: any) => {
  this.myActivities = [res.data];
  console.log('My activity:', this.myActivities);
});
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
        const activity = this.activities.filter((act:any)=>act.userID === user.id)
        if(leaves && leaves.length >0){
          this.combinedData.push({ ...user, emplJIfo ,activity,leaves });
        }
      });

      console.log(this.combinedData);
    }
  }


}
