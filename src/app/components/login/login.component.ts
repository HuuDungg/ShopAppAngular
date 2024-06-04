import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from '../../services/role-service.service';
import { Role } from '../../common/role';
import { UserServiceService } from '../../services/user-service.service';
import { LoginDTO } from '../../common/login-dto';
import { LoginResponse } from '../../responses/login-response';
import { TokenServiceService } from '../../services/token-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  listRole!: Role[];
  phone_number:string = "";
  password:string = "";
  roleForYou!: string;
  loginDTO: LoginDTO = new LoginDTO("", "");

  constructor(
    private roleService: RoleServiceService,
    private userSerice: UserServiceService,
    private tokenService: TokenServiceService
  ){}

  ngOnInit(): void {
    this.loadRole()
  }

  loadRole(){
    this.roleService.getAllRole().subscribe(response =>{
      this.listRole = response
    })
  }

  login(){
      this.loginDTO.phone_number = this.phone_number
      this.loginDTO.password = this.password

      this.userSerice.login(this.loginDTO).subscribe({
        next: (response: LoginResponse) => {
          const {token} = response
          this.tokenService.setToken(token)
        },
        complete: () => {
          // Xử lý logic sau khi hoàn thành (nếu cần)
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        }
      })
  }

}
