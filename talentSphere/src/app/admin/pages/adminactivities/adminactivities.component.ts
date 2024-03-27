import { Component } from '@angular/core';
import { TalentService } from '../../../talent.service';

@Component({
  selector: 'app-adminactivities',
  templateUrl: './adminactivities.component.html',
  styleUrl: './adminactivities.component.css'
})
export class AdminactivitiesComponent {
  constructor(private talent: TalentService){}


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
   console.log(res.data)
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
   searchTerm: string = '';

   handleSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filterData();
  }
  filteredData:any[] =[]
  // New method to filter data based on search term
  filterData(): void {
    if (!this.searchTerm || !this.combinedData) {
      // If search term is empty or combinedData is not defined, show all data
      this.filteredData = this.combinedData;
    } else {
      // Filter data based on search term
      this.filteredData = this.combinedData.filter((item :any)=> {
        // Modify conditions based on your data structure
        return (
          (item.fname && item.fname.toLowerCase().includes(this.searchTerm)) ||
          (item.lname && item.lname.toLowerCase().includes(this.searchTerm)) ||
          (item.email && item.email.toLowerCase().includes(this.searchTerm))
        );
      });
    }
  }





   formatTime(timeString: string): string {
   const timeParts = timeString.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    // Ensure valid time parts
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return 'Invalid time format';
    }

    // Formatting the time
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${formattedHours}:${formattedMinutes}`;

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
