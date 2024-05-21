import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public signupForm !: FormGroup;

  constructor(private builder: FormBuilder,
              private http: HttpClient,
              private authservice: AuthService,
              private router: Router,
              private httpservice: HttpService
  ) {}

  ngOnInit(): void {
    // this.signupForm = this.builder.group({
    //   firstname:[''],
    //   lastname:[''],
    //   email:[''],
    //   password:['']
    // })

    this.signupForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/')]),
    })
  }

  signUp() {
    this.authservice.signUp(this.signupForm)

  }
  

}
