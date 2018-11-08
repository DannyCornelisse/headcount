import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';
import { LoginCreds } from 'src/app/interfaces/login-creds';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  public loginCreds: LoginCreds = {
    name: '',
    password: ''
  };

  constructor(
    public activeModal: NgbActiveModal,
    public loginService: LoginService
  ) { }

  login() {
    this.loginService
      .login(this.loginCreds)
      .subscribe(
        () => {
          this.activeModal.close('successfully logged in');
        },
        err => console.error(err)
      );
  }


  ngOnInit() {
  }

}
