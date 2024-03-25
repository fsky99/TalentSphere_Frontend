import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../../talent.service';

@Component({
  selector: 'app-adminremunerations',
  templateUrl: './adminremunerations.component.html',
  styleUrls: ['./adminremunerations.component.css']
})
export class AdminremunerationsComponent implements OnInit {
  
  employees = [
    { name: 'John Doe', email:"johndoe@gmail.com", position: 'Software Engineer', salary: 70000, overtime: 10, daysTaken: 2, daysAvailable: 10, currentStatus: 'Active' },
    // Add more employee data as needed
  ];

  constructor(private talent : TalentService) { }

  ngOnInit(): void {
    this.getRemunerations()
  }
  
  userData: any = [];
  AllSalaries: any = [];
  combinedData: any = [];

  async getRemunerations() {
    this.talent.getAllSalaries().subscribe((resp:any) => {
      this.AllSalaries = resp.data;
      this.combineData();
    });

    this.talent.getAllUsers().subscribe((res:any) => {
      this.userData = res.data;
      this.combineData();
    });
  }

  combineData() {
    
    if (this.userData.length > 0 && this.AllSalaries.length > 0) {
  
      this.combinedData = [];

      this.userData.forEach((user: any) => {
       
        const salaryInfo = this.AllSalaries.find((salary: any) => salary.userID === user.id);

     
        if (salaryInfo) {
          this.combinedData.push({ ...user, salaryInfo });
        }
      });

      console.log(this.combinedData);
    }
  }
}
