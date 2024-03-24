import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
