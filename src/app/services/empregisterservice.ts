
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class EmployeeRegisterService
{
    apiUrl = 'http://localhost:62580/api/Employees/';

    constructor(private httpclient: HttpClient)
    {
    }

    getemployees()
    {
        return this.httpclient.get<Employee[]>(this.apiUrl + 'GetEmployees');
    }

    addemployee(request: Employee)
    {
        return this.httpclient.post<Employee>(this.apiUrl + 'AddEmployee');
    }

    editemployee(request: Employee)
    {
        return this.httpclient.put<Employee>(this.apiUrl + 'EditEmployee');
    }
}

export interface Employee {
    EmployeeId: number,
    EmployeeName: string,
    StaffNumber: string, 
    Email: string
}