import { Component, OnInit, Input } from '@angular/core';
import { TalentService } from '../talent.service';


@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrl: './viewprofile.component.css'
})
export class ViewprofileComponent implements OnInit 
{
  @Input() user: any;
  constructor(private talent : TalentService){}
  ngOnInit(): void {
   
  // this.getInfo()
 
  }

 
  // userData:any=[]
//  async getInfo(){
    
//     this.talent.getAllUsers().subscribe((res:any)=>{
//       this.userData = res.data;
//         console.log(res.data);
        

        
//       })
      
      
//   }
 
// showPopUp: boolean = false;

// togglePopUp() {
//   this.showPopUp = !this.showPopUp;
// }
  
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }
  
  
}
