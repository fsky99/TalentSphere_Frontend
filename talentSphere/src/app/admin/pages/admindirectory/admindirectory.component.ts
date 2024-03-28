import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../../talent.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../../components/profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-admindirectory',
  templateUrl: './admindirectory.component.html',
  styleUrls: ['./admindirectory.component.css'],
})
export class AdmindirectoryComponent implements OnInit {
  userData: any = [];
  jobInfo: any = [];
  employeeInfo: any = [];
  combinedData: any = [];

  constructor(private talent: TalentService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    this.talent.getAllUsers().subscribe((res: any) => {
      this.userData = res.data;
      this.combineData();
    });

    this.talent.getEmployeejobinfo().subscribe((results: any) => {
      this.jobInfo = results.data;
      this.combineData();
    });

    this.talent.getAllemployee().subscribe((resul: any) => {
      this.employeeInfo = resul.data;
      this.combineData();
    });
  }

  combineData() {
    if (this.userData.length > 0 && this.jobInfo.length > 0 && this.employeeInfo.length > 0) {
      this.combinedData = this.userData.map((user: any) => ({
        ...user,
        jobInformation: this.jobInfo.find((job: any) => job.userID === user.id),
        emp: this.employeeInfo.find((em: any) => em.userID === user.id)
      }));
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
