import { Component } from '@angular/core';

@Component({
  selector: 'app-masterprofile',
  templateUrl: './masterprofile.component.html',
  styleUrls: ['./masterprofile.component.css']
})
export class MasterProfileComponent {
  employee = {
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane.doe@example.com',
    dob: '1985-02-15',
    nationality: 'Canadian',
    country: 'Canada',
    phone_number: '+1-555-123-4567',
    address: '456 Maple Street, Toronto, ON',
    picture: 'https://via.placeholder.com/150', // Placeholder image URL
    cv: '',
    passport: '',
    contract: '',
    visa: '',
    job_title: 'Senior Developer',
    reports_to: 'John Smith',
    salary: 80000,
    vacation_overall: 25,
    vacation_left: 10,
    bonuses: 5000,
    login_id: 'jane.doe',
    password: 'password'
  };

  constructor() { }

  updateProfile() {
    // Implement your update logic here
  }

  deleteProfile() {
    // Implement your delete logic here
  }
}
