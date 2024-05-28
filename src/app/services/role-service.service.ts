import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../common/role';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  private baseApi = "http://localhost:8080/api/v1/role/getAllRoles";

  constructor(private http: HttpClient) { }

  getAllRole(){
      return this.http.get<Role[]>(this.baseApi);
  }
}
