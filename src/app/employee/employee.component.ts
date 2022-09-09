import { Component, OnInit,Input } from '@angular/core';
import { Employee, EmployeeType } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  @Input()
  emp:Employee;

  @Input()
  selected:boolean;


  ngOnInit() {

  }
}
