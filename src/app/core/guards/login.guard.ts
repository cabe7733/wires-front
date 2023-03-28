import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  token:any;
  constructor( private router:Router){}

  canActivate(): boolean{
    this.token = localStorage.getItem('user')
    if (!this.token) {
      this.router.navigate(['/auth/login'])
      return false;
    }
    return true;
  }

}
