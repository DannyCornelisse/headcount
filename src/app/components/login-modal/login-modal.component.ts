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
  public showError = false;
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
        (err) => {
          this.showError = true;
        }
      );
  }

  public passwordChange (ev: string) {
    if (ev.length > 0 && this.showError) {
      this.showError = false;
    }
  }


  ngOnInit() {
  }

}
