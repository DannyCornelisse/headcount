import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeModalComponent } from './../add-employee-modal/add-employee-modal.component';

@Component({
  selector: 'app-add-employee-card',
  templateUrl: './add-employee-card.component.html',
  styleUrls: ['./add-employee-card.component.scss']
})
export class AddEmployeeCardComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  openEmployeeModal() {
    console.log('hi there');
    this.modalService.open(AddEmployeeModalComponent);
  }

  ngOnInit() {
  }

}
