import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../talent.service';

@Component({
  selector: 'app-employee-remuneration',
  templateUrl: './employee-remuneration.component.html',
  styleUrl: './employee-remuneration.component.css'
})
export class EmployeeRemunerationComponent implements OnInit{
  constructor(private talent : TalentService) { }

  userId:any
 fname:any
 lname:any
  ngOnInit(): void {
    this.userId = localStorage.getItem('id')
    this.fname = localStorage.getItem('fname')
    this.lname = localStorage.getItem('lname')
    this.getRemunerations()
    this.getUserDataLoggedIn()
    this.getUserLeaves()
    this.getBonuses()
  }
  getUserId(){
    return localStorage.getItem('id')
  }
  userData: any = [];
  AllSalaries: any = [];
  jobInfo:any = []
  empleave:any=[]
  bonuses: any =[]
  combinedData: any = [];
  getDaysAvailable(empLea: any[]): number {
    const currentYear = new Date().getFullYear();
    const leaveDaysCurrentYear = empLea.filter(leave => new Date(leave.date).getFullYear() === currentYear);
    return 30 - leaveDaysCurrentYear.length;
  }
loggedInUserSalary:any =[]
getUserDataLoggedIn(){
  this.talent.getUserSalary(this.userId).subscribe((res:any)=>{
  this.loggedInUserSalary = res.data
  })
  console.log(this.loggedInUserSalary)
  
}
userLeaves:any =[]
getUserLeaves(){
  this.talent.getEmployeeLeaves().subscribe((res:any)=>{
this.userLeaves = res.data
console.log(res.data)
  })
  console.log(this.userLeaves)
}
userBonuses:any =[]
getBonuses(){
this.talent.getAllBonuses().subscribe((res:any)=>{
  this.userBonuses = res.data
})
console.log(this.userBonuses)
}


  async getRemunerations() {
    this.talent.getAllSalaries().subscribe((resp:any) => {
      this.AllSalaries = resp.data;
      this.combineData();
    });

    this.talent.getAllUsers().subscribe((res:any) => {
      this.userData = res.data;
      this.combineData();
    });

    this.talent.getEmployeesHobInfo().subscribe((results:any)=>{
      this.jobInfo = results.data
      this.combineData()
    })
    this.talent.getEmployeeLeaves().subscribe((dataRes:any)=>{
      this.empleave = dataRes.data
      console.log(this.empleave)
      this.combineData()
    })
    this.talent.getAllBonuses().subscribe((bonus:any)=>{
      this.bonuses = bonus.data
      this.combineData()
    })
  }

  combineData() {
    
    if (this.userData.length > 0 && this.AllSalaries.length > 0 && this.jobInfo.length > 0) {
  
      this.combinedData = [];
      // const empLea : any =[]
      this.userData.forEach((user: any) => {
       
        const salaryInfo = this.AllSalaries.find((salary: any) => salary.userID === localStorage.getItem('id'));
        const jobInformation = this.jobInfo.find((job:any)=>job.userID === localStorage.getItem('id'))
        // for(let i=0;i<this.empleave.length;i++){
        //   if(this.empleave[i] && this.empleave[i].userID === user.id){
        //     empLea.push(this.empleave[i])
        //   }
        
        // }
        const empLea = this.empleave.filter((emple:any)=>emple.userID === user.id)
       const bonusesData = this.bonuses.filter((bon:any)=>bon.userID === user.id)
     
        if (salaryInfo) {
          this.combinedData.push({ ...user, salaryInfo , empLea ,bonusesData,jobInformation });
        }
      });

      console.log(this.combinedData);
    }
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }
}
