import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, retry} from 'rxjs/operators';

import { LoginRequestModel } from '../model/LoginRequestModel';

import { API_VERIFY_ACCOUNT } from '../config/api-paths';
import { Employee } from '../model/employee';
import { USERNAME_KEY, USER_ID_KEY, USER_ROLE_KEY, USER_TOKEN_KEY } from '../config/user-roles-keys';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthService {
    constructor(
        private http: HttpClient
    ) {

    }

    login(loginRequest: LoginRequestModel): Observable<any> {
        return this.http.post(`'http://localhost:8001/login'}`, loginRequest).pipe(
            retry(2),
            catchError(err => {
                return throwError(err);
            })
        );
    }

    logout(): void {
        localStorage.removeItem(USER_ID_KEY);
        localStorage.removeItem(USER_ROLE_KEY);
        localStorage.removeItem(USERNAME_KEY);
        localStorage.removeItem(USER_TOKEN_KEY);
    }

    isLoggedIn(): boolean {
        return localStorage.getItem(USER_ID_KEY) != null;
    }

    activatedAccount(confirmationToken: string): Observable<any> {
        return this.http.get(`${API_VERIFY_ACCOUNT}/${confirmationToken}`);
    }
}
