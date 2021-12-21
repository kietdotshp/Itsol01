import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  private API_URL = 'http://localhost:8001/company'
  // public getAll(): Observable<any>{
  //   return this.http.get(this.API_URL)
  // }
  public getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.API_URL + '/all'}`)
  }
  // public update(id:number,data:any): Observable<any>{
  //   return this.http.put(this.API_URL+id, data)
  // }
  updateById(id: number, company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.API_URL + 'update'}/${id}`, company)
  }

}
