import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfomationUser } from '../model/InformationUser';
import { Profiles } from '../model/profiles';

@Injectable({
  providedIn: 'root'
})
export class InfomationUserService {

  constructor(private http: HttpClient) { }
  private API_URL = 'http://localhost:8080/pesonalInfomation'
  // public getid(id:number): Observable<[Profiles]>{
  //   return this.http.get<[Profiles]>(`${this.API_URL+'/getInformationUserById'+id}`)
  // }
  // find(id:number):Observable<Product>{
  //   return this.httpClient.get<Product>(`${apiUrl}/${id}`).pipe(
  //   )
  // }
  find(id:number):Observable<Profiles>{
    return this.http.get<Profiles>(`${this.API_URL+'/getInformationUserById'}/${id}`)
  }
}
