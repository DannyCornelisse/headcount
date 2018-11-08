import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'headcount';
  users: Array<any>;

  constructor (
  ) {

  }

  ngOnInit() {
    // const newEmployee: Employee = { name: 'Danny', onProject: true };

    // this.employeeService
    //   .addEmployee(newEmployee)
    //   .subscribe(res => console.log(res));
  }
}
