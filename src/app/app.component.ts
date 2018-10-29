import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { Employee } from './interfaces/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'headcount';
  users: Array<any>;

  constructor (
    public http: HttpClient,
    public employeeService: EmployeeService
  ) {

  }

  addUser (user: object) {
    return this.http.post('/api/users', {name: 'testu'})
      .subscribe(res => console.log(res));
  }

  getUsers() {
    return this.http.get('/api/users')
    .subscribe((res: any) => {
      this.users = res.data;
    });
  }

  updateUser(user: object) {
    return this.http.put('/api/users', user)
      .subscribe(result => console.log(result));
  }

  deleteUser (userId: string) {
    return this.http.delete('api/users', {
      params: {
        _id: userId
      }
    });
  }

  ngOnInit() {
    // const newEmployee: Employee = { name: 'Danny', onProject: true };

    // this.employeeService
    //   .addEmployee(newEmployee)
    //   .subscribe(res => console.log(res));
  }
}
