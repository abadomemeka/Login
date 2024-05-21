import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:3000/users"

  getAllUsers(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  getUserById(id:any): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/" + id)
  }

  saveUser(formData:any) {
    return this.http.post<any>(this.apiUrl, formData)
  }

  updateUser(id:any, formData:any) {
    return this.http.post<any>(this.apiUrl+'/'+id, formData)
  }
  
}
