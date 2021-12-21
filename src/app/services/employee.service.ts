import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './../model/employee';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  private API_URL = 'http://localhost:8080/api/admin/';
  private API_URL_USER = 'http://localhost:8080/api/user/';
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
}
