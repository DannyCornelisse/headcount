import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  public logout (): void {
    this.loginService.logout();
  }

  ngOnInit() {
  }

}
