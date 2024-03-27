import { Component, OnInit } from '@angular/core';
import { TalentService } from '../talent.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../admin/components/profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-employeedirectory',
  templateUrl: './employeedirectory.component.html',
  styleUrl: './employeedirectory.component.css'
})
export class EmployeedirectoryComponent implements OnInit{
  dialog: any;
  constructor(private talent : TalentService,dialog: MatDialog ){}
  
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
     
      this.combineData()
      
    })

    this.talent.getAllemployee().subscribe((resul:any)=>{
      this.employeeInfo = resul.data
     console.log(this.employeeInfo);
     
      this.combineData()
      
    })

  
  }
  
  combineData() {
    
    if (this.userData.length > 0 && this.jobInfo.length > 0 
      ) {
  
      this.combinedData = [];
      this.userData.forEach((user: any) => {
       
        const jobInformation = this.jobInfo.find((job:any)=>job.userID === user.id)
        
        
        const emp = this.employeeInfo.find((em:any)=>em.userID===user.id)
       
          this.combinedData.push({ ...user,jobInformation, emp });
        
      });
  
      console.log(this.combinedData);
    }
  }

  openProfileDialog(user: any) {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      width: '50%',
      data: { user },
      position: { bottom: '10%', left: '10%' }
    });
  }
  
  
  
  
  
}

