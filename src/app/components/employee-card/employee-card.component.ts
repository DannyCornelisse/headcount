import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { EditEmployeeModalComponent } from './../edit-employee-modal/edit-employee-modal.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: Employee;
  @Output() employeeChange: EventEmitter<any> = this.employeeService.employeeChange;

  constructor(
    private modalService: NgbModal,
    private employeeService: EmployeeService
  ) { }

  editEmployee(employee: Employee) {
    const modalRef = this.modalService.open(EditEmployeeModalComponent);

    modalRef.componentInstance.employee = employee;
    modalRef.result.then(() => {
      this.employeeChange.emit('update employees');
    });
  }

  ngOnInit() {
  }

}
