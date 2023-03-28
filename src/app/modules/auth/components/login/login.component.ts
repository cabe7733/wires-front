import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(private route:Router, private loginServices:LoginService) {
    this.login = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl(null,[Validators.required, Validators.minLength(5)])
   });

  }

  ngOnInit(): void {
  }

  get email(): AbstractControl {
    return this.login.get('email')!;
  }

  get password(): AbstractControl {
    return this.login.get('password')!;
  }

  loginSubmit(){
    console.log(this.login.value);
    this.loginServices.login(this.login.value).subscribe(data=>{
      sessionStorage.setItem('user', data);
      this.route.navigate(['messages/create-messages']);
    })
    this.login.reset();
  }

  redirectToSignUp(){
    this.route.navigate(['register']);
  }

}
