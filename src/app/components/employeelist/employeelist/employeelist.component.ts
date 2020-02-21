import { Component, OnInit } from '@angular/core';
import { EmployeeRegisterService, Employee } from 'src/app/services/empregisterservice';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees: Employee[];
  
  constructor(private employeeRegisterService: EmployeeRegisterService ) { }

  ngOnInit(): void {
    
    this.employeeRegisterService.getemployees().subscribe((data) => {      
      this.employees = data;     
     });
  }

}
