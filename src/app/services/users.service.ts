import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = "http://localhost:8001/api/user/upload/";
  constructor(private http:HttpClient) { }
  upload(file:any,id:any): Observable<any>{
    const formData = new FormData();
    formData.append('file', file,file.name)
    return this.http.post(`${this.URL}${id}`,formData)
  }
}
