import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../../login-modal/login-modal.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginModalComponent);
    modalRef.result.then(() => {
      console.log('login modal closed');
    });
  }

  openRegisterModal() {

  }

  ngOnInit() {
  }

}
