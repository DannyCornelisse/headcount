import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginCreds } from '../interfaces/login-creds';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { LoginRes } from '../interfaces/responses/login-post';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  public login (userCredentials: LoginCreds): Observable<LoginRes> {
    return this.http
      .post('/api/login', userCredentials)
      .pipe(
        map((res: LoginRes) => {
          this.authService.saveToken(res.token);
          return res;
        })
      );
  }

  public logout (): void {
    this.authService.removeToken();
    this.router.navigate(['/login']);
  }
}
