import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }


  staticData = "https://localhost:7178/api"


  url= `${this.staticData }/Services/GetAllServices`;

  getServices(): Observable < any > {
  return this.http.get<any>(this.url)

  }

  getSubServices(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubService/GetSubServiceByServiceId/${id}`)
  

  }

  getSubscriptions(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subscription`)

  }

  addUserSubscription(data : any): Observable<any> { // data : any >> because it takes data from body
    return this.http.post<any>(`${this.staticData}/userSubsciption`, data)
    

  }


  getSingleSubServiceById(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubService/GetSubServiceById/${id}`)


  }


  ///////////// For Registration ///////////////
  addUser(data:any): Observable<any> {
    return this.http.post(`${this.staticData}/User/CreateUser`, data)
  }



  //////////////// For Login ///////////////////

  loginUser(data:any): Observable<any> {
    return this.http.post(`${this.staticData}/User/Login`, data)
  }



}

