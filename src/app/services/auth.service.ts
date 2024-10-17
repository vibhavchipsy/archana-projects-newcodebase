import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(inst_id:any,username: any, password: any) {
    return this.http.post<any>(`${environment.apiUrl}${environment.apiPrefix}/admin/login`, { inst_id:inst_id,username: username, password: password })
      .pipe(map(user => {
        localStorage.setItem(`${environment.appName}` + 'user', user.data.access_token);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem(`${environment.appName}` + 'user');
    this.router.navigate(['/login']);
  }

}
