import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfomationUser } from '../model/InformationUser';
import { Profiles } from '../model/profiles';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class InfomationUserService {

  constructor(private http: HttpClient) { }
  private API_URL = 'http://localhost:8001/pesonalInfomation'
  // public getid(id:number): Observable<[Profiles]>{
  //   return this.http.get<[Profiles]>(`${this.API_URL+'/getInformationUserById'+id}`)
  // }
  // find(id:number):Observable<Product>{
  //   return this.httpClient.get<Product>(`${apiUrl}/${id}`).pipe(
  //   )
  // }
  find(id: number): Observable<Profiles> {
    return this.http.get<Profiles>(`${this.API_URL + '/getInformationUserById'}/${id}`)
  }

  update(id: number, body: Object = {}): Observable<Profiles[]> {
    return this.http.put<Profiles[]>(`${this.API_URL}` + "/updateInformationUserById/" + `${id}`, body);
  }
  // updateById(id:number,company:Company): Observable<Company>{
  //   return this.http.put<Company>(`${this.API_URL+'update'}/${id}`,company)
  // }
}
