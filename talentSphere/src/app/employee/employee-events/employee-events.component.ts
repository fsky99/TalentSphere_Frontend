import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../talent.service';

@Component({
  selector: 'app-employee-events',
  templateUrl: './employee-events.component.html',
  styleUrl: './employee-events.component.css'
})
export class EmployeeEventsComponent implements OnInit {

  Events: any[] = [];
  constructor(private talent: TalentService) {}

  ngOnInit(): void {
    this.getInfo();
  }


  async getInfo() {
    this.talent.getAllEvents().subscribe((res: any) => {
      this.Events = res.data;
      console.log(this.Events);
    });
  }


  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }


  formatTime(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

}
