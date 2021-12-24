import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Jobs } from "../model/job.model";
import { ResponseData } from "../model/response-data";
import { searchJob } from "../model/searchJob";

@Injectable({
    providedIn: 'root'
})

export class listJobService {

    private API_URL = 'http://localhost:8001/jobs/';

    constructor(private http: HttpClient) { }

    getAllJob() {
        return this.http.get<any>(this.API_URL + 'getAll');
    }
    public getJobById(id: number): Observable<Jobs> {
        return this.http.get<Jobs>(`${this.API_URL+'getJob'}/${id}`, {
          params: {
            IdNumber: id,
          },
        });
      }

      public getAllJobPage(
        pageN: number,
        pageS: number
      ): Observable<ResponseData> {
        return this.http.get<ResponseData>(`${this.API_URL+'getAllPage'}`, {
          params: {
            pageNumber: pageN,
            pageSize: pageS,
          },
        });
      }

      public searchJobs(search: searchJob): Observable<Jobs[]>{
        return this.http.post<Jobs[]>(`${this.API_URL+'search'}`, search);
      }

}


