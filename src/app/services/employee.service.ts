import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './../interfaces/employee';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Array<Employee>;
  @Output() employeeChange: EventEmitter<any> = new EventEmitter();

  private endpoint = '/api/employees/';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  public addEmployee (employee: Employee): Observable<Object> {
    const token = this.authService.getToken();
    return this.http.post(this.endpoint, employee, { headers: {'x-access-token': token} });
  }

  public getEmployees() {
    const token = this.authService.getToken();
    return this.http.get(this.endpoint, { headers: {'x-access-token': token} })
    .pipe(
      map((res: any) => {
        this.employees = res;
        return this.employees;
      })
      );
    }

    public updateEmployee(employee: Employee): Observable<any> {
      const token = this.authService.getToken();
      return this.http.put(
        `${this.endpoint}${employee._id}`,
        employee,
        { headers: {'x-access-token': token} }
        )
        .pipe(
          map((res: any) => {
            return res;
          })
        );
  }

  public deleteEmployee (employeeId: string) {
    const token = this.authService.getToken();
    return this.http.delete(`${this.endpoint}${employeeId}`, { headers: {'x-access-token': token} });
  }
}
