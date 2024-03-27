import { Component, OnInit, ViewChild } from '@angular/core';
import { TalentService } from '../../../talent.service';

@Component({
  selector: 'app-admindirectory',
  templateUrl: './admindirectory.component.html',
  styleUrl: './admindirectory.component.css',

})
export class AdmindirectoryComponent implements OnInit {
  

constructor(private talent : TalentService){}
ngOnInit() {
  this.getUsers()
}
results: any =[]


userData: any = [];
AllSalaries: any = [];
jobInfo:any = []
empleave:any=[]
bonuses: any =[]
combinedData: any = [];
employeeInfo:any=[]
async getUsers() {

  this.talent.getAllUsers().subscribe((res:any) => {
    this.userData = res.data;
    this.combineData();
  });

  this.talent.getEmployeesHobInfo().subscribe((results:any)=>{
    this.jobInfo = results.data
    console.log(this.jobInfo);
    
    this.combineData()
  })
  
  this.talent.getAllemployee().subscribe((resul:any)=>{
    this.employeeInfo = resul.data
   console.log(this.employeeInfo);
   
    this.combineData()
    
  })

}




combineData() {
  
  if (this.userData.length > 0 && this.jobInfo.length > 0) {

    this.combinedData = [];
    this.userData.forEach((user: any) => {
     
      const jobInformation = this.jobInfo.find((job:any)=>job.userID === user.id)
      
      const emp = this.employeeInfo.find((em:any)=>em.userID===user.id)
       
   
     
        this.combinedData.push({ ...user,jobInformation , emp});
      
    });

    console.log(this.combinedData);
  }
}






}
