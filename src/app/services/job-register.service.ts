import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseData } from '../model/response-data';
import { JobRegister } from '../model/job-register';
import { searchJobRegister } from '../model/searchJobRegister';

@Injectable({
  providedIn: 'root',
})
export class JobRegisterService {
  constructor(private http: HttpClient) { }
  private API_URL_GetAll = 'http://localhost:8001/api/jobsRegister/getAll';
  private API_URL_GetById = 'http://localhost:8001/api/jobsRegister/getById';
  private API_URL_Search = 'http://localhost:8001/api/jobsRegister/search';

  public getAllJobregister(
    pageN: number,
    pageS: number
  ): Observable<ResponseData> {
    return this.http.get<ResponseData>(`${this.API_URL_GetAll}`, {
      params: {
        pageNumber: pageN,
        pageSize: pageS,
      },
    });
  }

  public getJobregisterById(id: number): Observable<JobRegister> {
    return this.http.get<JobRegister>(`${this.API_URL_GetById}/${id}`, {
      params: {
        IdNumber: id,
      },
    });
  }

  public searchJobRegister(search: searchJobRegister): Observable<JobRegister[]>{
    return this.http.post<JobRegister[]>(`${this.API_URL_Search}`, search);
  }

  // public getAllByName(name: string): Observable<JobRegister> {
  //   return this.http.get<JobRegister>(`${this.API_URL_GetById}/${name}`, {
  //     params: {
  //       userName: name,
  //     },
  //   });
  // }

  // public getAllByVacancies(vacancies: string): Observable<JobRegister> {
  //   return this.http.get<JobRegister>(`${this.API_URL_GetById}/${vacancies}`, {
  //     params: {
  //       jobPosition: vacancies,
  //     },
  //   });
  // }
}
