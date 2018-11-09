import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageKey = 'jwt';

  constructor() { }

  public saveToken (token: string): void {
    return localStorage.setItem(this.localStorageKey, token);
  }

  public getToken (): string {
    return localStorage.getItem(this.localStorageKey);
  }

  public removeToken(): void {
    return localStorage.removeItem(this.localStorageKey);
  }
}
