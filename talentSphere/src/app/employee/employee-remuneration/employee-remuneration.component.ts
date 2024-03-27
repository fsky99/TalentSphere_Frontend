import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../talent.service';

@Component({
  selector: 'app-employee-remuneration',
  templateUrl: './employee-remuneration.component.html',
  styleUrl: './employee-remuneration.component.css'
})
export class EmployeeRemunerationComponent implements OnInit{
  constructor(private talent : TalentService) { }

  ngOnInit(): void {
    this.getRemunerations()
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
       
        const salaryInfo = this.AllSalaries.find((salary: any) => salary.userID === user.id);
        const jobInformation = this.jobInfo.find((job:any)=>job.userID === user.id)
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
}
