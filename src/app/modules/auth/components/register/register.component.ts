import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;

  constructor(private route:Router, private services:RegisterService) {
    this.register = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      username: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      fullName: new FormControl(null,[Validators.required, Validators.minLength(5)])
   });
   }


  ngOnInit(): void {
  }

  get email(): AbstractControl {
    return this.register.get('email')!;
  }

  get password(): AbstractControl {
    return this.register.get('password')!;
  }

  get username(): AbstractControl {
    return this.register.get('username')!;
  }

  get fullName(): AbstractControl {
    return this.register.get('fullName')!;
  }

  onRegister(){
    /* this.services.postRegister(this.register.value).subscribe(data => {
      console.log(data);

      this.route.navigate(['login']);
    }); */
    this.register.reset();

  }
  redirectoLogin(){
    this.route.navigate(['auth/login']);
  }

}
