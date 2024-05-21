import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { employee } from '../employee';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor( private employeeservice: EmployeeService,
               private router: Router,
               private toastr: ToastrService) {} 

  formData: employee = {
    id: 0,
    name: '',
    designation: '',
    salary: 0
  }
  
  createEmployee() {
    this.employeeservice.createEmployee(this.formData).subscribe({
      next: (data) => {
        this.toastr.success("Employee successfully created")
        this.router.navigate(['home'])
      },
      error: (er) => {
        this.toastr.error("Try again")
      }
    })

  }

}
