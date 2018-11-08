import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from 'src/app/services/register.service';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterRes } from 'src/app/interfaces/responses/register-post';
import { LoginService } from 'src/app/services/login.service';
import { RegisterCreds } from 'src/app/interfaces/register-creds';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  public registerCreds: RegisterCreds = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    public activeModal: NgbActiveModal,
    public registerService: RegisterService,
    public authService: AuthService,
    public loginService: LoginService
  ) { }

  registerUser() {
    return this.registerService
      .register(this.registerCreds)
      .subscribe(
        (res: RegisterRes)  => {
          this.loginService
            .login({ name: this.registerCreds.name, password: this.registerCreds.password })
            .subscribe(() => {
              this.activeModal.close('successfully registered and logged in');
            });
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnInit() {
  }

}
