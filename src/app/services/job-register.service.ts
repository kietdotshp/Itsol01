import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseData } from '../model/response-data';
import { JobRegister } from '../model/job-register';
import { searchJobRegister } from '../model/searchJobRegister';
import { AddJobRegister } from '../model/job-register-add';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobRegisterService {

  private apiServerUrl = environment.API_URL;
  constructor(private http: HttpClient) { }

  public getAllJobregister(
    pageN: number,
    pageS: number
  ): Observable<ResponseData> {
    return this.http.get<ResponseData>(`${this.apiServerUrl}` + '/jobsRegister/getAll', {
      params: {
        pageNumber: pageN,
        pageSize: pageS,
      },
    });
  }

  public getJobregisterById(id: number): Observable<JobRegister> {
    return this.http.get<JobRegister>(`${this.apiServerUrl}`+ '/jobsRegister/getById/' + `${id}`, {
      params: {
        IdNumber: id,
      },
    });
  }

  public searchJobRegister(search: searchJobRegister): Observable<JobRegister[]> {
    return this.http.post<JobRegister[]>(`${this.apiServerUrl}` + '/jobsRegister/search', search);
  }

  public updateJobRegister(update: AddJobRegister): Observable<AddJobRegister[]> {
    return this.http.put<AddJobRegister[]>(`${this.apiServerUrl}` + '/jobsRegister/update', update);
  }
}
