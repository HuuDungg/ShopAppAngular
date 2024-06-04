import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterDTO } from '../common/register-dto';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl = 'http://localhost:8080/api/v1/user/register';
  constructor(private http: HttpClient) { }

  register(register: RegisterDTO):Observable<any>{
     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

     return this.http.post(this.baseUrl, register,{headers, responseType: 'text'})
  }
}
