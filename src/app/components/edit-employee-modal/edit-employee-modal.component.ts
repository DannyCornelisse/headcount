import { Component, OnInit, Input } from '@angular/core';
import { Employee, EmployeeTypeOptions } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['./edit-employee-modal.component.scss']
})
export class EditEmployeeModalComponent implements OnInit {
  @Input() employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    public activeModal: NgbActiveModal
  ) { }

  public employeeCopy: Employee = {
    name: '',
    onProject: false,
    company: {
      name: ''
    },
    type: 'None'
  };

  employeeTypeOptions = EmployeeTypeOptions;

  editEmployee() {
    return this.employeeService
      .updateEmployee(this.employeeCopy)
      .subscribe(() => {
        return this.activeModal.close();
      });
  }

  deleteEmployee(employeeId) {
    return this.employeeService
      .deleteEmployee(employeeId)
      .subscribe(
        () => this.activeModal.close(),
        err => console.log(err)
      );
  }

  ngOnInit() {
    this.employeeCopy = JSON.parse(JSON.stringify(this.employee));

    if (!this.employeeCopy.company) {
      this.employeeCopy.company = {
        name: ''
      };
    }
  }

}
