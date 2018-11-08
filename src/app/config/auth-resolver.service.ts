import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthResolverService implements Resolve<any> {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  resolve() {
    const promise = new Promise((resolve, reject) => {
      const token =  this.authService.getToken();
      if (token) {
        resolve(token);
      } else {
        reject('no token');
        this.router.navigate(['/login']);
      }
    });

    return promise;
  }
}
