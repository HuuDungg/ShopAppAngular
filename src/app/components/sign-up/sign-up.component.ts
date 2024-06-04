import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { RegisterDTO } from '../../common/register-dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']  // Sửa lỗi từ "styleUrl" thành "styleUrls"
})
export class SignUpComponent {
  @ViewChild('registerForm') registerForm!: NgForm;

  phone: string;
  password: string;
  reTypePasswold: string; // Sửa lỗi từ "reTypePasswold" thành "reTypePassword"
  name: string;
  isAccepted: boolean;
  registerDTO!: RegisterDTO;

  constructor( private userSerivice: UserServiceService, private router: Router) {
    this.phone = '';
    this.password = '';
    this.reTypePasswold = '';
    this.name = '';
    this.isAccepted = false;
  }

  register() {
    const registerData = {
      fullname: this.name,
      phone_number: this.phone,
      password: this.password,
      retype_password: this.reTypePasswold,
      role_id: 1
    };

    this.registerDTO = registerData

    this.userSerivice.register(this.registerDTO).subscribe(
      {
        next: (response: any) => {
          this.router.navigate(['/login']);
        },
        complete: () => {
          // Xử lý logic sau khi hoàn thành (nếu cần)
        },
        error: (error: any) => {
          console.error('There was an error!', error);
        }
      }
     )

  }
}
