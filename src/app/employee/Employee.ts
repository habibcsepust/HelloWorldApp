export enum EmployeeType{
  Daily=0,
  Permanent,
  Contract,
  Retired
}

export class Employee{
  id:number;
  name:string;
  salary:number;
  dateOfJoin:Date;
  empType:EmployeeType;

  constructor(id:number, name:string, salary:number, dateOfJoin:Date, empType:EmployeeType){
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.dateOfJoin = dateOfJoin;
    this.empType = empType;
  }
}
