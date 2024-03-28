import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../../talent.service';

@Component({
  selector: 'app-admin-activity',
  templateUrl: './admin-activity.component.html',
  styleUrls: ['./admin-activity.component.css']
})
export class AdminActivityComponent implements OnInit {
  constructor(private talent: TalentService) {}

  userData: any;
  userActivity: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const userId = localStorage.getItem('id');

    this.talent.getUser(userId).subscribe((res: any) => {
      this.userData = res.data;
    });

    this.talent.getAllActivities().subscribe((res: any) => {
      this.userActivity = res.data.filter((act: any) => act.userID === userId);
      this.userActivity.sort((a: any, b: any) => a.status.localeCompare(b.status));
    });
  }

  checkout(id: any) {
    const currentTime = new Date();
    const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

    // Corrected method name to updateStatusForChcekout
    this.talent.updateStatusForChcekout(id, formattedTime).subscribe(() => {
      alert("Checked out successfully");
      window.location.reload();
    });
  }
}
