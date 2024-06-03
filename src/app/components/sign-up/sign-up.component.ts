import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) {
    this.phone = '';
    this.password = '';
    this.reTypePasswold = '';
    this.name = '';
    this.isAccepted = false;
  }

  register() {
    const baseUrl = 'http://localhost:8080/api/v1/user/register';

    const registerData = {
      fullname: this.name,
      phone_number: this.phone,
      address: '123 Le Loi, District 1, Ho Chi Minh City',
      password: this.password,
      retype_password: this.reTypePasswold,
      date_of_birth: '2004-03-08',
      role_id: 2
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(baseUrl, registerData, { headers: headers, responseType: 'text' }).subscribe({
      next: (response: any) => {
        this.router.navigate(['/login']);
      },
      complete: () => {
        // Xử lý logic sau khi hoàn thành (nếu cần)
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      }
    });
  }
}
