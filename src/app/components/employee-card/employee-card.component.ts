import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
    console.log(this.employee);
  }

}
