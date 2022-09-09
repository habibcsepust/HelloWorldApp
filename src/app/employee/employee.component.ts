import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeType } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  emp:Employee;

  ngOnInit() {
    this.emp = new Employee(1, "MD. Habibur Rahman", 30000, new Date('09/15/2022'),EmployeeType.Permanent)
  }

}
