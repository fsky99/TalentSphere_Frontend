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
getUserActivity(id:any){
  return this.http.get(`${this.baseUrl}/timeSheet/${id}`, this.getRequestOptions())
}
getUserDataFromEmail(email:any){
  return this.http.get(`${this.baseUrl}/users/${email}`, this.getRequestOptions())
}
getEmployeesHobInfo(){
  return this.http.get(this.baseUrl +'/employeejobinfo', this.getRequestOptions())
}
getEmployeeLeaves(){
  return this.http.get(this.baseUrl +'/empleave' , this.getRequestOptions())
}
getAllBonuses(){
  return this.http.get(this.baseUrl+ '/bonus', this.getRequestOptions())
}
getAllActivities(){
  return this.http.get(this.baseUrl + '/timeSheet', this.getRequestOptions())
}
getAllEvents(){
  return this.http.get(this.baseUrl + '/eventss' , this.getRequestOptions())
}


//create 
createUser(userData:any){
  return this.http.post(this.baseUrl + '/addUser', userData ,this.getRequestOptions())
}

createJobInfo(jobInfo:any){
  return this.http.post(this.baseUrl + '/addEmployeeJobInfo' , jobInfo , this.getRequestOptions())
}

createSalary(empSalary:any){
  return this.http.post(this.baseUrl + '/addSalary' , empSalary , this.getRequestOptions())
}

createEmployee(emp:any){
  return this.http.post(this.baseUrl +'/addEmployee' , emp , this.getRequestOptions())
}

createTimeSheet(data:any){
return this.http.post(this.baseUrl +'/addTimeSheet' , data , this.getRequestOptions())
}
craeteEvent(event:any){
  return this.http.post(this.baseUrl +'/addEvent',event ,this.getRequestOptions())
}


//updates

updateStatus(status:any){
  return this.http.put(this.baseUrl +'/updateEmpleave',status, this.getRequestOptions())
}



updateStatusForChcekout(id:any, time:any){
return this.http.put(`${this.baseUrl}/updateStatusofTS/${id}/${time}`, this.getRequestOptions())
}






getEmployeejobinfo(){
  return this.http.get(this.baseUrl+'/employeejobinfo', this.getRequestOptions())

}
getAllemployee(){
  return this.http.get(this.baseUrl +'/employee' , this.getRequestOptions())
}


}
