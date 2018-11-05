import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './../interfaces/employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Array<Employee>;
  @Output() employeeChange: EventEmitter<any> = new EventEmitter();

  private endpoint = '/api/employees/';

  constructor(
    public http: HttpClient
  ) { }

  addEmployee (employee: Employee) {
    return this.http.post(this.endpoint, employee);
  }

  getEmployees() {
    return this.http.get(this.endpoint)
    .pipe(
      map((res: any) => {
        this.employees = res;
        return this.employees;
      })
    );
  }

  updateEmployee(employee: Employee) {
    return this.http.put(`${this.endpoint}${employee._id}`, employee)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteEmployee (employeeId: string) {
    return this.http.delete(`${this.endpoint}${employeeId}`);
  }
}
