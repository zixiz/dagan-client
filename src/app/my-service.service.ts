import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'

  })
};
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }  
  url: string = "http://localhost:3000/form"

  sendForm(form):Observable<any>{
    return this.http.post(this.url,form);
  }
}
