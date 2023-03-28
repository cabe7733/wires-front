import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateMessageService {


  constructor(private http: HttpClient) { }

  createMessage(data:any){
    let url ="wires/messages";
    return this.http.post<any>(environment.url+url,data);
  }
}
