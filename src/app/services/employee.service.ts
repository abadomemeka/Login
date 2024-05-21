import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  employeeUrl = "http://localhost:3000/employees";

  getEmployee() {
    return this.http.get<employee[]>(this.employeeUrl)
  }

  createEmployee(data: employee) {
    return this.http.post(this.employeeUrl, data)
  }

  editEmployee(id: number) {
    return this.http.get<employee>(`${this.employeeUrl}/${id}`)
  }

  updateEmployee(data: employee) {
    return this.http.put<employee>(`${this.employeeUrl}/${data.id}`, data)
  }

  deleteEmployee(id: number) {
    return this.http.delete<employee>(`${this.employeeUrl}/${id}`)
  
  }

}

