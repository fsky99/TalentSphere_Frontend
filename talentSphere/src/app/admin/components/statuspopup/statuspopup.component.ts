import { Component, OnInit } from '@angular/core';
import { TalentService } from '../../../talent.service';

@Component({
  selector: 'app-statuspopup',
  templateUrl: './statuspopup.component.html',
  styleUrls: ['./statuspopup.component.css']
})
export class StatuspopupComponent implements OnInit {
  isVisible: boolean = false;
 ;
 today: string = new Date().toISOString().split('T')[0];

  tasks: any[] = [
    { id: 1, name: 'Finish project proposal', completed: false },
    { id: 2, name: 'Buy groceries', completed: true },
    { id: 3, name: 'Go for a run', completed: false }
  ];
 Date(){
  this.Date()
 }
  timeShe ={
    id: null ,
    userID: localStorage.getItem('id'),
    checkinTime : '',
    checkoutTime :'',
    projectName : '',
    taskName :'',
    status : 'N'
  }
  constructor(private talent: TalentService) { }

  ngOnInit(): void {
  }

  togglePopup() {
    this.isVisible = !this.isVisible;
  }

  closePopup() {
    this.isVisible = false;
  }

  toggleTaskCompletion(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }

formatTime(timeString: string): string {
  // Assuming timeString is in format "HH:MM"
  const [hours, minutes] = timeString.split(':');
  return `${hours}:${minutes}:00`;
}
TimeSheetData ={}
 async submitStatus() {
  console.log(this.timeShe)
   // Format checkinTime before sending to the backend
  //  const formattedCheckinTime = this.formatTime(this.timeShe.checkinTime);

   // Update the timeShe object with the formatted checkinTime
   this.timeShe.checkinTime = this.formatTime(this.timeShe.checkinTime);
console.log("new time" ,this.timeShe.checkinTime)
    // Submit status logic here
await this.talent.createTimeSheet(this.timeShe).subscribe((res:any)=>{
  console.log("added" , res)
  this.closePopup();

})
    console.log('Status submitted');
  }
}
