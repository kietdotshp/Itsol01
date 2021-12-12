// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';

// import {BehaviorSubject, Observable, throwError} from 'rxjs';
// import {environment} from '../../environments/environment';
// import {catchError, retry} from 'rxjs/operators';
// import {USER_ID_KEY, USER_ROLE_KEY, USER_TOKEN_KEY, USERNAME_KEY} from '../_models/config/local-storage-keys';
// import {API_VERIFY_ACCOUNT} from '../_models/config/api-paths';
// import {ChangePasswordModel} from '../_models/request/change-password.model';
// import {JwtResponse} from '../_models/response/jwt-response';
// import {Employee} from '../_models/employee.model';
// import {EmployeeAddModel} from '../_models/request/employee-add.model';
// import { LoginRequestModel } from '../model/LoginRequestModel';


// @Injectable(
//     {
//         providedIn: 'root'
//     }
// )
// export class AuthService {
//     constructor(
//         private http: HttpClient
//     ) {

//     }

//     login(loginRequest: LoginRequestModel): Observable<any> {
//         return this.http.post(`${environment.auth_url}/login`, loginRequest).pipe(
//             retry(2),
//             catchError(err => {
//                 return throwError(err);
//             })
//         );
//     }

//     logout(): void {
//         localStorage.removeItem(USER_ID_KEY);
//         localStorage.removeItem(USER_ROLE_KEY);
//         localStorage.removeItem(USERNAME_KEY);
//         localStorage.removeItem(USER_TOKEN_KEY);
//     }

//     isLoggedIn(): boolean {
//         return localStorage.getItem(USER_ID_KEY) != null;
//     }

//     activatedAccount(confirmationToken: string): Observable<any> {
//         return this.http.get(`${API_VERIFY_ACCOUNT}/${confirmationToken}`);
//     }

//     changePassword(passwords: ChangePasswordModel) {
//         return this.http.post(`${environment.auth_url}/change-password/` + localStorage.getItem(USERNAME_KEY), passwords)
//             .pipe(
//                 retry(2),
//                 catchError(err => {
//                     return throwError(err);
//                 })
//             );
//     }

//     updateByAdmin(employee: Employee) {
//         return this.http.put(`${environment.auth_url}/update`, employee)
//             .pipe(
//                 retry(2),
//                 catchError(err => {
//                     return throwError(err);
//                 })
//             );
//     }

//     addByAdmin(empAdd: EmployeeAddModel)  {
//         return this.http.post(`${environment.auth_url}/add`, empAdd)
//             .pipe(retry(2)),
//             catchError(err => {
//                 return throwError(err);
//             });
//     }

// }
