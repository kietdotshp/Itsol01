import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import { ROLE_ADMIN, ROLE_JE } from 'src/app/config/local-storage-keys';
import {AuthService} from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
    constructor(
        private router: Router,
        private auth: AuthService
    ) {

    }
    // kiểm tra điều kiện khi vào các routing khác nhau
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const role = localStorage.getItem('user-role-key');
        if (((role === ROLE_JE) || (role === ROLE_ADMIN))) {
            return true;
        }
        return false;
    }

}
