import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './../interfaces/employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Array<Employee>;

  constructor(
    public http: HttpClient
  ) { }

  addEmployee (employee: Employee) {
    return this.http.post('/api/employees', employee);
  }

  getEmployees() {
    return this.http.get('/api/employees')
    .pipe(
      map((res: any) => {
        this.employees = res.data;
        return this.employees;
      })
    );
  }

  updateEmployee(employee: Employee) {
    return this.http.put('/api/employees', employee)
      .subscribe(result => console.log(result));
  }

  deleteEmployee (employeeId: string) {
    return this.http.delete('api/employees', {
      params: {
        _id: employeeId
      }
    });
  }
}
