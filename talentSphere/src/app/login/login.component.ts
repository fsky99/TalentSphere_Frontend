import { Component } from '@angular/core';
import { TalentService } from '../talent.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private talent : TalentService){

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

  }
 })

}
}