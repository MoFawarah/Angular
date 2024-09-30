import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  // بحط كل الروابط من سواقر للسيرفس
  staticData = "https://localhost:7178/api"


  url= `${this.staticData }/Services/GetAllServices`;

  getServices(): Observable < any > {
  return this.http.get<any>(this.url)

  }

  getSubServices(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubService/GetSubServiceByServiceId/${id}`)
  

  }
}
