import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,) { }

  ngOnInit(): void {
  }

  redirectToSignUp(){
    this.route.navigate(['auth/register']);
  }

  redirectToLognIn(){
    this.route.navigate(['auth/login']);
  }

}
