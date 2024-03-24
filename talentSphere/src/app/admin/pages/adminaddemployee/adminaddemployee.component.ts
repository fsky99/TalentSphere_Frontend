import { Component } from '@angular/core';

@Component({
  selector: 'app-adminaddemployee',
  templateUrl: './adminaddemployee.component.html',
  styleUrls: ['./adminaddemployee.component.css']
})
export class AdminAddEmployeeComponent {
  employee = {
    first_name: '',
    last_name: '',
    email: '',
    dob: '',
    nationality: '',
    country: '',
    phone_number: '',
    address: '',
    picture: '',
    cv: '',
    passport: '',
    contract: '',
    visa: '',
    job_title: '',
    reports_to: '',
    salary: 0,
    vacation_overall: 0,
    vacation_left: 0,
    bonuses: 0,
    login_id: '',
    password: ''
  };

  constructor() { }

  approve() {
    // Implement your approve logic here
    console.log('Approve clicked');
    // Add your approve logic here
  }

  submitForm() {
    // Implement your form submission logic here
    console.log('Form submitted', this.employee);
    // Add your form submission logic here
  }
}
