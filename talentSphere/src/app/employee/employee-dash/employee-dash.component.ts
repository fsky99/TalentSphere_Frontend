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
  console.log('outside',userId)
  if (userId) {
    this.userId = userId;
    console.log(userId)
    this.getData();
    // this.getUserActivity(userId)



  } else {
    console.error('User ID not found in localStorage');
  
  }
}
// getUserActivity(id:any){
//   this.talent.getUserActivity(id).subscribe((dat:any)=>{
//     this.myActivities = dat.data
//     console.log('activities for me',this.myActivities)

//   })

  
// }
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
//   this.myActivities = this.activities.find((res: any) => res.userID === localStorage.getItem('id'));
// console.log(this.myActivities)
  // this.myActivities = this.activities.find((resl:any)=>resl.userID === this.userId)
  // console.log(this.myActivities)

  this.combineData()

})
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
        const activity = this.activities.filter((act:any)=>act.userID === user.id)
        if(leaves && leaves.length >0){
          this.combinedData.push({ ...user, emplJIfo ,activity,leaves });
        }
      });

      console.log(this.combinedData);
    }
  }


}
