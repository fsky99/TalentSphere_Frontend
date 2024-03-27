import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css'],
  template: `
    <h2>User Profile</h2>
    <app-viewprofile [user]="data.user"></app-viewprofile>
    <button (click)="close()">Close</button>
  `,
})
export class ProfileDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ProfileDialogComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}
