import { Component, OnInit } from '@angular/core';
import { TalentService } from '../talent.service';

@Component({
  selector: 'app-employeedirectory',
  templateUrl: './employeedirectory.component.html',
  styleUrl: './employeedirectory.component.css'
})
export class EmployeedirectoryComponent implements OnInit{
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
  
  async getUsers() {
  
    this.talent.getAllUsers().subscribe((res:any) => {
      this.userData = res.data;
      this.combineData();
    });
  
    this.talent.getEmployeesHobInfo().subscribe((results:any)=>{
      this.jobInfo = results.data
      
      this.combineData()
    })
  
  }
  
  combineData() {
    
    if (this.userData.length > 0 && this.jobInfo.length > 0) {
  
      this.combinedData = [];
      this.userData.forEach((user: any) => {
       
        const jobInformation = this.jobInfo.find((job:any)=>job.userID === user.id)
        
        
     
       
          this.combinedData.push({ ...user,jobInformation });
        
      });
  
      console.log(this.combinedData);
    }
  }
  
  
  
  
  
  
}

