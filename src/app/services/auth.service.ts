import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private httpservice: HttpService,
              private toastr: ToastrService,
              private router: Router
  ) { }

  signUp(form:any) {
    this.httpservice.saveUser(form.value).subscribe( (res) => {
      this.toastr.success("Sign up successful")
      form.reset()
      this.router.navigate(['login'])
    }, err => {
      this.toastr.error("Something went wrong")
    })


  }

  login(form:any) {
    this.httpservice.getAllUsers().subscribe( (res) => {
      const user = res.find((a:any) => {
        return a.email === form.value.email && a.password === form.value.password
      })
  
      if(user) {
        const token = Math.random()
        localStorage.setItem('token', token.toString())
        this.toastr.success("Login Successful")
        form.reset()
        this.router.navigate(['home'])
      }
      else {
        this.toastr.warning("User not found")
      }
    }, err => {
      this.toastr.error("Something went wrong")
  
    })
  
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}

