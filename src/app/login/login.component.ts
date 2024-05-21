import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm !: FormGroup;

  constructor(private builder: FormBuilder,
    private http: HttpClient,
    private authservice: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private httpservice: HttpService
) {}

ngOnInit(): void {
  // this.loginForm = this.builder.group({
  //   email:[''],
  //   password:['']
  // })

  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/')]),
  })
}

loginuser() {
  this.authservice.login(this.loginForm)
}

}
