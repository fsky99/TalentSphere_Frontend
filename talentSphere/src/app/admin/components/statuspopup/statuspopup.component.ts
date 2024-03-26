import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statuspopup',
  templateUrl: './statuspopup.component.html',
  styleUrls: ['./statuspopup.component.css']
})
export class StatuspopupComponent implements OnInit {
  isVisible: boolean = false;
  currentDate: string = '2023-04-05';
  checkInTime: string = '09:00';
  checkOutTime: string = '17:00';
  currentProject: string = 'Website Redesign';
  tasksPlanned: number = 5;
  tasksAchieved: number = 3;
  tasks: any[] = [
    { id: 1, name: 'Finish project proposal', completed: false },
    { id: 2, name: 'Buy groceries', completed: true },
    { id: 3, name: 'Go for a run', completed: false }
  ];

  constructor() { }

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

  submitStatus() {
    // Submit status logic here
    console.log('Status submitted');
    this.closePopup();
  }
}
