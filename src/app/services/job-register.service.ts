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

  public searchJobRegister(search: searchJobRegister, pageN: number, pageS: number): Observable<ResponseData> {
    return this.http.post<ResponseData>(`${this.apiServerUrl}` + '/jobsRegister/search', search, {
      params: {
        pageNumber: pageN,
        pageSize: pageS,
      },
    });

  }

  public updateJobRegister(update: AddJobRegister): Observable<AddJobRegister[]> {
    return this.http.put<AddJobRegister[]>(`${this.apiServerUrl}` + '/jobsRegister/update', update);
  }

  public dowloadCvFile(applicantId: number): Observable<Blob>{
    // return this.http.get<Blob>(`${this.apiServerUrl}` + `/jobsRegister/cv/download/` + `${applicantId}`);
    return this.http.get(`${this.apiServerUrl}` + `/jobsRegister/cv/download/` + `${applicantId}`, {
      responseType: 'blob'
    });
  }
  public apply(formData: FormData): Observable<any>{
    return this.http.post(`${this.apiServerUrl}` + `/jobsRegister`,formData);
  }
  public sendMail(send: AddJobRegister): Observable<AddJobRegister[]> {
    return this.http.put<AddJobRegister[]>(`${this.apiServerUrl}` + '/jobsRegister/sendMail', send);
  }
}
