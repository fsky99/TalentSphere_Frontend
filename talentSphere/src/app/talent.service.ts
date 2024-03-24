import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class TalentService {

  constructor(private http: HttpClient) { 

  }
  private LoggedIn = false;
  private baseUrl = 'http://localhost:3000' 

  isLoggedIn() {
        this.LoggedIn = localStorage.getItem('isLoggedIn') === ('true');
        return (this.LoggedIn);
  }
  
  setLoggedIn(value: boolean) {
    this.LoggedIn = value;
}

login(user: any) {
  return this.http.post('http://localhost:3000/users/login', user)
}

getAllUsers() {
  return this.http.get(this.baseUrl + '/users');
}








}
