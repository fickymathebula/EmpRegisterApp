import { Component, OnInit } from '@angular/core';
import { EmployeeRegisterService } from 'src/app/services/empregisterservice';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  constructor(private employeeRegisterService: EmployeeRegisterService) { }

  ngOnInit(): void {
  }

  updateEmployee(request: any)
  {
    this.employeeRegisterService.editemployee(request).subscribe();
  }
}
