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
    password: ''
  };

  constructor(private talent : TalentService) { }


  userData : any ={
    id: null,
    fname :this.employee.fname ,lname : this.employee.lname ,
    username : this.employee.username 
,
    email : this.employee.email,
    password : this.employee.password
,    type : this.employee.type ,

    dob : this.employee.dob,  
      phoneno : this.employee.phoneno ,
    country : this.employee.country ,
    address : this.employee.address ,

    gender : this.employee.gender,
    picture : this.employee.picture 
  
  }


UserTableData : any =[]
employeeTableData : any =[]
salaryTableData : any =[]
jobInfoTableData : any =[]




  approve() {
    // Implement your approve logic here
    console.log('Approve clicked');
    // Add your approve logic here
  }

 async submitForm() {

//all the create will happen here


console.log( " employee " + this.employee)

this.talent.createUser(this.userData).subscribe(async(resp:any=[])=>{
  this.UserTableData = resp
})

console.log("user table data" + this.UserTableData)





    // Implement your form submission logic here
    console.log('Form submitted', this.employee);
    // Add your form submission logic here
  }
}
