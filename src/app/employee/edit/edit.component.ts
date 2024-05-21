import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from '../employee';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  constructor(private employeeservice: EmployeeService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService
   ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'))
      this.getById(id)
      console.log(this.formData)
    })
      
  }

  formData: employee = {
    id: 0,
    name: '',
    designation: '',
    salary: 0
  }

  getById(id:number) {
    this.employeeservice.editEmployee(id).subscribe((data) => {
      this.formData = data;
    })

  }

  editEmployee() {
    this.employeeservice.updateEmployee(this.formData).subscribe({
      next: (data) => {
        this.toastr.success("Employee successfully updated")
        this.router.navigate(['home'])
      },
      error: (er) => {
        this.toastr.error("Try again")
      }
    })

  }
}
