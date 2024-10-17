import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environments';
import { AuthService } from '../services/auth.service'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        if (localStorage.getItem(`${environment.appName}` + 'user')) {
            let token = localStorage.getItem(`${environment.appName}` + 'user');
            if (token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`,
                        'x-db-key': 'mk'
                    }
                });
            }
        } else {
            request = request.clone({
                setHeaders: {
                    'x-db-key': 'mk'
                }
            });
        }
        return next.handle(request);
    }
}