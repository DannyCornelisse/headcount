import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee, EmployeeTypeOptions } from 'src/app/interfaces/employee';


@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.scss']
})
export class AddEmployeeModalComponent implements OnInit {
  newEmployee: Employee = {
    name: '',
    onProject: false,
    company: {
      name: ''
    },
    type: 'None'
  };

  employeeTypeOptions = EmployeeTypeOptions;

  constructor(
    public activeModal: NgbActiveModal,
    public employeeService: EmployeeService
  ) { }

  addEmployee() {
    return this.employeeService
      .addEmployee(this.newEmployee)
      .subscribe(res => {
        this.activeModal.close();
      });
  }

  ngOnInit() {
    console.log(this.employeeTypeOptions);

  }

}
