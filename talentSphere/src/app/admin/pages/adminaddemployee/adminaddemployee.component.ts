import { Component } from '@angular/core';
import { TalentService } from '../../../talent.service';

@Component({
  selector: 'app-adminaddemployee',
  templateUrl: './adminaddemployee.component.html',
  styleUrls: ['./adminaddemployee.component.css']
})
export class AdminAddEmployeeComponent {
  employee = {
    id:null,
    fname: '',
    lname: '',
    email: '',
    dob: '',
    gender: '',
    country: '',
    phoneno: '',
    joiningDate : '',
    emprank:"",
    type: '',
    address: '',
    picture: '',
    cv: '',
    passport: '',
    jobContract: '',
    healthCheck:'',
    visa: '',
    jobName: '',
    reportsTo: '',
    salary: 0,
    department: '',
    account_no: '',
    username: '',
    password: '',
    job_id :''
  };

  constructor(private talent : TalentService) { }


 


UserTableData : any =[]
employeeTableData : any =[]
salaryTableData : any =[]
jobInfoTableData : any =[]
userDataFromEmail:any=[]

AddUser() {
  const userData = {
    id: null,
    fname: this.employee.fname,
    lname: this.employee.lname,
    username: this.employee.username,
    email: this.employee.email,
    password: this.employee.password,
    type: this.employee.type,
    dob: this.employee.dob,  
    phoneno: this.employee.phoneno,
    country: this.employee.country,
    address: this.employee.address,
    gender: this.employee.gender,
    picture: this.employee.picture 
  };

  console.log("User Data before adding", userData);

  this.talent.createUser(userData).subscribe(
    (resp: any) => {
      this.UserTableData = resp;
      alert('User Added');
      console.log("user table data after it's added", this.UserTableData);
      
  
      this.employee.id = resp.data.id;
      console.log("User ID:", this.employee.id);
      
    
      this.talent.getUserDataFromEmail(resp.data.email).subscribe(
        (res: any) => {
          this.userDataFromEmail = res.data;
          console.log("User data from email:", this.userDataFromEmail);
        },
        (error) => {
          console.error("Error fetching user data from email:", error);
        }
      );
    },
    (error) => {
      console.error("Error adding user:", error);
    }
  );
}



 
 async submitForm() {

  const employeeJobInfo = {
    id: null,
    userID: this.employee.id,
    cv: this.employee.cv,
    passport: this.employee.passport,
    visa: this.employee.visa,
    healthCheck: this.employee.healthCheck,
    jobContract: this.employee.jobContract,
    jobName: this.employee.jobName,
    joiningDate: this.employee.joiningDate,  
    reportsTo: this.employee.reportsTo
  };



  const salaryData ={
    id: null,
    userID: this.employee.id,
    salary : this.employee.salary
  }

  this.talent.createJobInfo(employeeJobInfo).subscribe((res:any)=>{
    this.employee.job_id = res.data.id
  })
  const employeeData = {
    id: null,
    userID: this.employee.id,
    emprank: this.employee.emprank,
    reports_to: this.employee.reportsTo,
    department: this.employee.department,
    account_no : this.employee.account_no,
    job_id : null
  };
  this.talent.createEmployee(employeeData).subscribe((res:any)=>{
    console.log("emploee data" +res)
  })
  this.talent.createSalary(salaryData).subscribe((res:any)=>{
    console.log("salaryAdded"+ res.data)
  })

console.log('added?')
alert("user Data Added")



  }
}
