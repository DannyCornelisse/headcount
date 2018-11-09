import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeModalComponent } from './../add-employee-modal/add-employee-modal.component';

@Component({
  selector: 'app-add-employee-card',
  templateUrl: './add-employee-card.component.html',
  styleUrls: ['./add-employee-card.component.scss']
})
export class AddEmployeeCardComponent implements OnInit {
  @Output() employeeChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalService: NgbModal
  ) { }

  public openEmployeeModal() {
    const modalRef = this.modalService.open(AddEmployeeModalComponent);
    modalRef.result.then(() => {
      this.employeeChange.emit('update employees');
    });
  }

  ngOnInit() {
  }

}
