import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private employeeservice: EmployeeService,
              private authservice: AuthService
  ) {}

  allEmployees: employee[] = [];

  ngOnInit(): void {
      this.employeeservice.getEmployee().subscribe( (data) => {
        this.allEmployees = data;
      })
  }

  logOut() {
    this.authservice.logout()
  }

  deleteitem(id:number) {
    this.employeeservice.deleteEmployee(id).subscribe( {
      next: (data) => {
        this.allEmployees = this.allEmployees.filter(_ => _.id != id)
      }
    })
  }



}
