import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeModalComponent } from './../add-employee-modal/add-employee-modal.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee-card',
  templateUrl: './add-employee-card.component.html',
  styleUrls: ['./add-employee-card.component.scss']
})
export class AddEmployeeCardComponent implements OnInit {
  @Output() employeeChange: EventEmitter<any> = this.employeeService.employeeChange;

  constructor(
    private modalService: NgbModal,
    private employeeService: EmployeeService
  ) { }

  openEmployeeModal() {
    const modalRef = this.modalService.open(AddEmployeeModalComponent);
    modalRef.result.then(() => {
      this.employeeChange.emit('update employees');
    });
  }

  ngOnInit() {
  }

}
