import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  dropdown:boolean = false;
  userName:any='esteban';

  constructor(private services:LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  toggleDropdown(){
    this.dropdown = !this.dropdown
  }

  logout(){
    this.services.logout()
    this.route.navigate(['auth/login']);
  }

}
