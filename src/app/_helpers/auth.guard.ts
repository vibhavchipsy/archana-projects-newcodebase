import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { environment } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem(`${environment.appName}` + 'user')) {
            return true;

        } else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            localStorage.setItem(`${environment.appName}` + 'user', '')
            return false;
        }
    }
}