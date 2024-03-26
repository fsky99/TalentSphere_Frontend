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
  private getRequestOptions() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', token);
    }
    return { headers: headers };
  }
  isLoggedIn() {
        this.LoggedIn = localStorage.getItem('isLoggedIn') === ('true')
        return (this.LoggedIn);
  }
  
  setLoggedIn(value: boolean) {
    this.LoggedIn = value;
}

login(user: any) {
  return this.http.post('http://localhost:3000/users/login', user)
}

getAllUsers() {
  return this.http.get(this.baseUrl + '/users' , this.getRequestOptions())
}

getAllSalaries(){
  return this.http.get(this.baseUrl +'/salary' ,  this.getRequestOptions())
}
getUser(id:any){
  return this.http.get(`${this.baseUrl}/users/${id}`, this.getRequestOptions())
}

getEmployeejobinfo(){
  return this.http.get(this.baseUrl+'/employeejobinfo', this.getRequestOptions())

}



}
