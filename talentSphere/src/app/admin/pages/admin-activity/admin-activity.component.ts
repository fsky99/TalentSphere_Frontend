import { Component } from '@angular/core';
import { TalentService } from '../../../talent.service';

@Component({
  selector: 'app-admin-activity',
  templateUrl: './admin-activity.component.html',
  styleUrl: './admin-activity.component.css'
})
export class AdminActivityComponent {
constructor(private talent : TalentService){}

userData:any =[]
userActivity :any =[]
combinedData: any = [];
ngOnInit(): void {
  this.getData()
   }
async getData(){
  this.talent.getUser(localStorage.getItem('id')).subscribe((res:any)=>{
 this.userData.push(res.data)
 console.log(res.data)

  })
  this.talent.getAllActivities().subscribe((res:any)=>{
   this.userActivity = res.data
      })
this.filteredDataActivity(this.userActivity)

  // this.combineData()

}

filteredDataActivity(activity:any){
  activity.filter((res:any)=> res.userID === localStorage.getItem('id'))
}

checkout(id:any){
  this.talent.updateStatusForChcekout(id).subscribe((res:any)=>{
    alert(closed)
    window.location.reload()
  })

}



}
