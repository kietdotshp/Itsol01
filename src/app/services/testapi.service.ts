import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TestapiService {

  constructor(private http: HttpClient) { }
  private API_URL = 'http://localhost:9898/api/v1/categories'


  public getAll(): Observable<any>{
    return this.http.get(this.API_URL)
  }
  public insert(data:any): Observable<any>{
    return this.http.post(this.API_URL, data);
  }
  public update(id:number,data:any): Observable<any>{
    return this.http.put(this.API_URL+id, data)
  }
  public remove(id:number): Observable<any>{
    return this.http.delete(this.API_URL+id)
  }
}
