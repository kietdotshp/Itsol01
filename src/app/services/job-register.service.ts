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

 public getAllJobregister(): Observable<ResponseData>{
   return this.http.get<ResponseData>(`${this.API_URL}`, {
    params: {
      pageNumber: 0,
      pageSize: 2
    }
   });
 }
}
