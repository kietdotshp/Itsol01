import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Jobs } from "../model/job.model";
import { ResponseData } from "../model/response-data";

@Injectable({
    providedIn: 'root'
})

export class listJobService {
    // API_URL:string = 'http://localhost:8080/jobs/'

    // constructor(private http: HttpClient) { }
    // public getAllJob():Observable<any> {
    //     return this.http.get<any>(this.API_URL + 'getJob');
    // }
    private API_URL = 'http://localhost:8001/jobs/';

    constructor(private http: HttpClient) { }

    getAllJob() {
        return this.http.get<any>(this.API_URL + 'getAll');
    }
    // getAllJob(pageNumber: number, pageSize: number) :
    //     Observable < ResponseData > {
    //         return this.http.get<ResponseData>(`${this.API_URL}`, {
    //             params: {
    //                 pageNumber: pageNumber,
    //                 pageSize: pageSize
    //             }
    //         })
    //     }
    // }

}


