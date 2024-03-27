import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TalentService } from '../../../talent.service';

@Component({
  selector: 'app-adminaddevent',
  templateUrl: './adminaddevent.component.html',
  styleUrls: ['./adminaddevent.component.css']
})
export class AdminaddeventComponent {
constructor(private taletnt : TalentService){}

eventData ={
  id: null,
  userID: localStorage.getItem('id'),
  eventName : '',
  eventDate : '',
  eventTime :'',
  picture: ''
}

  @Input() isVisible: boolean = false;
  @Output() closePopup = new EventEmitter<void>();


  CrateEvent(){
this.taletnt.craeteEvent(this.eventData).subscribe((res:any)=>{
  alert("event added")
  this.close()
})
  }


  close() {
    this.isVisible = false;
    this.closePopup.emit();
  }
}
