import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobRegister } from '../model/job-register';
import { ResponseData } from '../model/response-data';

@Injectable({
  providedIn: 'root'
})
export class JobRegisterService {

 constructor(private http: HttpClient) { }
 private API_URL = 'http://localhost:8001/api/jobsRegister/getAll'

 public getAllJobregister(): Observable<JobRegister[]>{
   return this.http.get<JobRegister[]>(`${this.API_URL}`);
 }
}
