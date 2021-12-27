import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { ResponseData } from '../model/response-data';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL_USER = "http://localhost:8001/api/user";
  private URL = "http://localhost:8001/api/user/upload/";
  constructor(private http:HttpClient) { }
  upload(file:any,id:any): Observable<any>{
    const formData = new FormData();
    formData.append('file', file,file.name)
    return this.http.post(`${this.URL}${id}`,formData)
  }
  // getbyId(id: number):Observable<User>{
  //   return this.http.get<User>(`${this.URL_USER + '/getuser'}/${id}`)
  // }
  find(id: number): Observable<User> {
    return this.http.get<User>(`${this.URL_USER + '/getuser'}/${11}`)
  }
// public getbyId(id: number): Observable<User> {
//   return this.http.get<User>(`${this.URL_USER+'/getuser'}/${id}`, {
//     params: {
//       id: id,
//     },
//   });
// }
// public getbyId(id: number) {
//   return this.http.get<User>(`${this.URL_USER + '/getuser'}/${id}`);
// }
// public getUser(id: number) {
//   return this.http.get<User>(this.URL_USER + '/getuser/' + id);
// }

}
