// import {Injectable} from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';


// const TOKEN_KEY = 'auth-token';
// const USER_KEY = 'auth-user';


// @Injectable({
//   providedIn: 'root',
// })
// export class TokenService {
//   constructor(
//     private cookie: CookieService,
//   ) {
//   }

//   getToken() {
//     return window.sessionStorage.getItem(TOKEN_KEY);
//   }

//   public saveToken(token: string): void {
//     window.sessionStorage.removeItem(TOKEN_KEY);
//     window.sessionStorage.setItem(TOKEN_KEY, token);
//   }

//   removeToken() {
//     this.cookie.delete(TOKEN_KEY);
//   }

//   public saveUser(user: any): void {
//     window.sessionStorage.removeItem(USER_KEY);
//     window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
//   }

//   public getUser(): any {
//     const user = window.sessionStorage.getItem(USER_KEY);
//     if (user) {
//       return JSON.parse(user);
//     }

//     return {};
//   }
// }
