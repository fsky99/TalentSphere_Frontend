import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-adminaddevent',
  templateUrl: './adminaddevent.component.html',
  styleUrls: ['./adminaddevent.component.css']
})
export class AdminaddeventComponent {
  @Input() isVisible: boolean = false;
  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.isVisible = false;
    this.closePopup.emit();
  }
}
