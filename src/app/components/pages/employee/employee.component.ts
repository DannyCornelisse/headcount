import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
  ) { }
  employees: Array<Employee>;

  fetchEmployees () {
    return this.employeeService
      .getEmployees()
      .subscribe((employees: Array<Employee>) => {
          this.employees = employees;
        },
        err => console.log(err)
      );
  }

  addEmployee(employee: Employee) {
    this.employeeService
      .addEmployee(employee)
      .subscribe(() => this.fetchEmployees());
  }


  ngOnInit() {
    this.fetchEmployees();
  }


}
