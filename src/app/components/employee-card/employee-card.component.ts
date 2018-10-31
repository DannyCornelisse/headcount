import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { EditEmployeeModalComponent } from './../edit-employee-modal/edit-employee-modal.component';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: Employee;

  constructor(
    private modalService: NgbModal
  ) { }

  editEmployee(employee: Employee) {
    const modalRef = this.modalService.open(EditEmployeeModalComponent);
    modalRef.componentInstance.employee = employee;
  }

  ngOnInit() {

  }

}
