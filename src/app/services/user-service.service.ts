import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterDTO } from '../common/register-dto';
import { LoginDTO } from '../common/login-dto';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private registerUrl = `${environment.baseUrl}/user/register`;
  private loginUrl = `${environment.baseUrl}/user/login`;
  private apiConfig = {
    headers: this.createHeaders()
  }

  constructor(private http: HttpClient) { }

  register(register: RegisterDTO):Observable<any>{
     return this.http.post(this.registerUrl, register,this.apiConfig)
  }

  login(LoginDTO: LoginDTO):Observable<any>{
      return this.http.post(this.loginUrl, LoginDTO, this.apiConfig)
  }

  private createHeaders(): HttpHeaders{
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }
}
