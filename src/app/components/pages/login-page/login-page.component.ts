import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../../login-modal/login-modal.component';
import { RegisterModalComponent } from '../../register-modal/register-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) { }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginModalComponent);
    modalRef.result.then(() => {
      this.router.navigate(['/employees']);
    });
  }

  openRegisterModal() {
    const modalRef = this.modalService.open(RegisterModalComponent);
    modalRef.result.then(() => {
      this.router.navigate(['/employees']);
    });
  }

  ngOnInit() {
  }

}
