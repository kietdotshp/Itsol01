// import {Injectable} from '@angular/core';
// import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
// import {Observable} from 'rxjs';
// import {AuthService} from '../auth.service';

// @Injectable({
//     providedIn: 'root'
// })
// export class GuardsGuard implements CanActivate {
//     constructor(
//         private router: Router,
//         private auth: AuthService
//     ) {

//     }
//     // kiểm tra điều kiện khi vào các routing khác nhau
//     canActivate(
//         next: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//         const role = localStorage.getItem(USER_ROLE_KEY);
//         if (((role === ROLE_HR) || (role === ROLE_MANAGER)) && (this.auth.isLoggedIn())) {
//             return true;
//         }
//         return false;
//     }

// }
