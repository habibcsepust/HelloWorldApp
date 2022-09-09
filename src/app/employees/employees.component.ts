import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeType } from '../employee/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:Employee[]=[];
  constructor() {
    this.employees[0] = new Employee(1, "MD. Habibur Rahman", 30000, new Date('09/15/2022'),EmployeeType.Permanent)
    this.employees[1] = new Employee(2, "MD. Haidar Ali", 35000, new Date('09/15/2022'),EmployeeType.Daily)
    this.employees[2] = new Employee(3, "MD. Ejabuddin", 40000, new Date('09/15/2022'),EmployeeType.Retired)
  }

  selectedEmployee : Employee
  SelectEmployee(e){
    console.log("OKKOO");
    this.selectedEmployee = e;
  }

  ngOnInit() {
  }

}
