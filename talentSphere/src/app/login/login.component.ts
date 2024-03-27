import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TalentService } from '../talent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('loginVideo') loginVideo!: ElementRef<HTMLVideoElement>;

  user = {
    email: '',
    password: ''
  };

  constructor(private talent: TalentService, private router: Router) {}

  ngAfterViewInit(): void {
    if (this.loginVideo && this.loginVideo.nativeElement) {
      this.loginVideo.nativeElement.muted = true;
    }
  }

  async login() {
    this.talent.login(this.user).subscribe(async (response: any) => {
      console.log(response);

      if (response.success == 'login successful') {
        this.talent.setLoggedIn(true);
        localStorage.setItem('email', response.email);
        localStorage.setItem('id', response.id);
        localStorage.setItem('token', response.token);
        localStorage.setItem('type', response.type);
         localStorage.setItem('fname',response.fname)
         localStorage.setItem('lname',response.lname)

        console.log(response);
        if (localStorage.getItem('type') === 'H') {
          this.router.navigate(['/admin-dashboard']);
        } else if (localStorage.getItem('type') === 'E') {
          this.router.navigate(['/employee-dashboard']);
        }
      }
    });
  }
}
