import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../../talent.service';


@Component({
  selector: 'app-adminremunerations',
  templateUrl: './adminremunerations.component.html',
  styleUrls: ['./adminremunerations.component.css']
})
export class AdminremunerationsComponent implements OnInit {
  
  // employees = [
  //   { name: 'John Doe', email:"johndoe@gmail.com", position: 'Software Engineer', salary: 70000, overtime: 10, daysTaken: 2, daysAvailable: 10, currentStatus: 'Active' },
  //   // Add more employee data as needed
  // ];

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

  bonusAddData ={
    id:null ,
    userID :'',
    salaryID:'',
    bonus:'',
    bonusDate:''

  }
  addBonus(salaryID: any, userID: any) {
    const bonusData = this.combinedData.find((data: any) => data.salaryInfo.id === salaryID && data.id === userID);
    if (bonusData) {
      this.talent.addBonusToEmployee({
        id: null,
        userID: bonusData.id,
        salaryID: salaryID,
        bonus: bonusData.bonus,
        bonusDate: bonusData.bonusDate
      }).subscribe((res: any) => {
        alert("Bonus added");
        window.location.reload();
      });
    }}
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
