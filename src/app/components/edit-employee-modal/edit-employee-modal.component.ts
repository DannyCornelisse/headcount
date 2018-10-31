import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['./edit-employee-modal.component.scss']
})
export class EditEmployeeModalComponent implements OnInit {
  @Input() employee: Employee = {
    name: '',
    onProject: false,
    company: {
      name: ''
    }
  };

  constructor(
    private employeeService: EmployeeService,
    public activeModal: NgbActiveModal
  ) { }

  editEmployee() {
    return this.employeeService
      .updateEmployee(this.employee)
      .subscribe(() => {
        return this.activeModal.close();
      });
  }

  ngOnInit() {
    if (!this.employee.company) {
      this.employee.company = {
        name: ''
      };
    }
  }

}
