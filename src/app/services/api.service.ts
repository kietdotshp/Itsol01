import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_BASE_URL = 'http://localhost:8001/';

  constructor(private http : HttpClient)
  {}
  getAlljobs(){
    return this.http.get(this.API_BASE_URL)
  }
}
