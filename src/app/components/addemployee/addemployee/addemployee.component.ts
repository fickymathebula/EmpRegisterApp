import { Component, OnInit } from '@angular/core';
import { EmployeeRegisterService, Employee } from 'src/app/services/empregisterservice';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private employeeRegisterService: EmployeeRegisterService) { }

  ngOnInit(): void {
  }

  addEmployee(request: any)
  {
      this.employeeRegisterService.addemployee(request).subscribe();
  }

}
