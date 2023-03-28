import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyMessageService {

  constructor(private http: HttpClient) { }

  myMessage(){
    let url ="wires/messages/me";
    return this.http.get<any>(environment.url+url);
  }
}
