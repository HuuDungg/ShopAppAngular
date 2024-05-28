import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from '../../services/role-service.service';
import { Role } from '../../common/role';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  listRole!: Role[];
  constructor(
    private roleService: RoleServiceService
  ){}
  ngOnInit(): void {
    this.roleService.getAllRole().subscribe(response =>{
      this.listRole = response
    })
  }
}
