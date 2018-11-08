import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public saveToken (token: string): void {
    localStorage.setItem('jwt', token);
  }

  public getToken (): string {
    return localStorage.getItem('jwt');
  }
}
