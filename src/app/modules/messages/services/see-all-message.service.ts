import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeeAllMessageService {

  constructor(private http: HttpClient) { }

  allMessage(){
    let url ="wires/messages";
    return this.http.get<any>(environment.url+url);
  }
}
