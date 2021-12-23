import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { ROLE_ADMIN, ROLE_JE } from 'src/app/config/local-storage-keys';
import { USER_ROLE_KEY } from 'src/app/config/user-roles-keys';
import {AuthService} from '../auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = localStorage.getItem(USER_ROLE_KEY);
      if (((role === ROLE_JE) || (role === ROLE_ADMIN)) ) {
          return true;
      }
      return false;
  }
}
