import { Component } from '@angular/core';
import { TalentService } from '../talent.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private talent : TalentService , private router: Router){

}
user={
  email:'',
  password:''
}
async login() {
 this.talent.login(this.user)
 .subscribe(async (response:any)=>{
  console.log(response);
  
  if (response.success=='login successful' ){
this.talent.setLoggedIn(true)
localStorage.setItem('email',response.email)
localStorage.setItem('id',response.id)
localStorage.setItem('token',response.token)
localStorage.setItem('type',response.type)

console.log(response);
if(localStorage.getItem('type') === 'H'){
  this.router.navigate(['/admin-dashboard'])
}
else if(localStorage.getItem('type') === 'E'){
  this.router.navigate(['/employee-home'])

}
  }
 })
//  this.router.navigate(['/other']);
}
}