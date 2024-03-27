import { Component } from '@angular/core';
import { TalentService } from '../../../talent.service';

@Component({
  selector: 'app-admin-activity',
  templateUrl: './admin-activity.component.html',
  styleUrl: './admin-activity.component.css'
})
export class AdminActivityComponent {
  constructor(private talent : TalentService){}

  userData: any = []
  userActivity: any = []
  combinedData: any = [];

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.talent.getUser(localStorage.getItem('id')).subscribe((res:any) => {
      this.userData.push(res.data);
    });

    this.talent.getAllActivities().subscribe((res:any) => {
      this.userActivity = res.data;
      this.filteredDataActivity(this.userActivity);
    });
  }
  getUserId(){
   return localStorage.getItem('id')
  }
  filteredDataActivity(activity: any) {
    activity.filter((res: any) => res.userID === localStorage.getItem('id'));
    console.log(activity)
    // Sort userActivity array based on status ('N' first, 'C' later)
    this.userActivity.sort((a: any, b: any) => {
      if (a.status === 'N' && b.status === 'C') {
        return -1; // 'N' comes before 'C'
      } else if (a.status === 'C' && b.status === 'N') {
        return 1; // 'C' comes after 'N'
      } else {
        return 0; // No change in order
      }
    });
  }

  checkout(id: any) {
    const currentTime = new Date(); // Obtain current date and time
    const hours = currentTime.getHours(); // Get current hours
    const minutes = currentTime.getMinutes(); // Get current minutes
    const seconds = currentTime.getSeconds(); // Get current seconds

    // Format the time as HH:MM:SS
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    this.talent.updateStatusForChcekout(id, formattedTime).subscribe((res: any) => {
      console.log(id);
      console.log(formattedTime);
      console.log(res);
      alert("closed");
      window.location.reload();
    });
  }
}
