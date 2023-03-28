import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data:any){
    let url ="login";
    return this.http.post<any>(environment.url+url,data);
  }

  logout(){
    let url ="logout";
    return this.http.post<any>(environment.url+url,{});
  }
}
