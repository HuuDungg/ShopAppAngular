import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../common/role';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  private baseApi = `${environment.baseUrl}/roles/getAllRoles`;

  constructor(private http: HttpClient) { }

  getAllRole(){
      return this.http.get<Role[]>(this.baseApi);
  }
}
