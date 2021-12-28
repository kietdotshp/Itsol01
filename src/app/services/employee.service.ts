import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './../model/employee';
import { HttpClient } from '@angular/common/http';
import { ResponseData } from "../model/response-data";
import { searchJe } from '../model/searchJe';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  private API_URL = 'http://localhost:8001/api/admin/';
  private API_URL_USER = 'http://localhost:8001/api/user/';
  private API_URL_SEARCH='http://localhost:8001/api/admin/all/';
  public getAllJe(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL + 'getallje');
  }

  public getAllUSER(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL_USER + 'getalluser');
  }

  public deleteUSER(id: number): Observable<Employee> {
    return this.http.delete<any>(this.API_URL_USER + 'deleteUser/' + id);
  }

  public addJE(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.API_URL + 'signupje', employee);
  }

  public deleteJE(id: number): Observable<Employee> {
    return this.http.delete<any>(this.API_URL + 'delete/' + id);
  }
  public updateJE(employee: Employee, id: number): Observable<Employee[]> {
    return this.http.put<Employee[]>(this.API_URL + 'updateJE/' + id, employee);
  }

  public getEmployeeById(id: number) {
    return this.http.get<Employee>(this.API_URL + 'getje/' + id);
  }

  public getAllJePage(
    pageN: number,
    pageS: number
  ): Observable<ResponseData> {
    return this.http.get<ResponseData>(`${this.API_URL+'getAllJePage'}`, {
      params: {
        pageNumber: pageN,
        pageSize: pageS,
      },
    });
  }

  public searchJe(search: searchJe, fullName:String ,email:String): Observable<Employee[]>{
    return this.http.post<Employee[]>(`${this.API_URL+'all'+`?fullName=${fullName}&email=${email}`}`, search);
  }
  // public getSearchJobRegister(search: searchJobRegister,currentPage: number, pageSize: number ): Observable<jobregister[]> {
  //   const url = `${this.apiServerUrl}` + "/user/jobregister/search"+`?pageIndex=${currentPage}&pageSize=${pageSize}`
  //   return this.http.put<jobregister[]>(url, search);
  // }

}
