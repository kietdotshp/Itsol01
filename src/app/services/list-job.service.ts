import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Jobs } from "../model/job.model";
import { ResponseData } from "../model/response-data";

@Injectable({
    providedIn: 'root'
})

export class listJobService {

    private API_URL = 'http://localhost:8001/jobs/';

    constructor(private http: HttpClient) { }

    getAllJob() {
        return this.http.get<any>(this.API_URL + 'getAll');
    }
   
}


