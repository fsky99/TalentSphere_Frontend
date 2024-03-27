import { Component } from '@angular/core';
import { TalentService } from '../../talent.service';

@Component({
  selector: 'app-remunerationpopup',
  templateUrl: './remunerationpopup.component.html',
  styleUrl: './remunerationpopup.component.css'
})
export class RemunerationpopupComponent {
constructor(private talent : TalentService){}



leaveRequest ={
  id:null ,
  userID : localStorage.getItem('id'),
  date : '',
  status :'P'
}
AddRequestLeave(){
  this.talent.createEmployeeLeave(this.leaveRequest).subscribe((res:any)=>{
alert("reques Added")
  })
}



}
