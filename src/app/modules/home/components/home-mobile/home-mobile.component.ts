import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrls: ['./home-mobile.component.sass']
})
export class HomeMobileComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  redirectToSignUp(){
    this.route.navigate(['auth/register']);
  }

  redirectToLognIn(){
    this.route.navigate(['auth/login']);
  }

}
