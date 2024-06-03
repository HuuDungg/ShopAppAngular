import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  @ViewChild("registerForm") registerForm!: NgForm

  phone: String;
  password: String;
  reTypePasswold: String;
  name:String;
  isAccepted:boolean;
  constructor(){
    this.phone = "";
    this.password = "";
    this.reTypePasswold = "";
    this.name = "";
    this.isAccepted=false;
  }

  register(){
    alert(`${this.name} has register with phone ${this.phone} and password ${this.password} and retypePassword ${this.reTypePasswold} ${this.isAccepted}`)
  }
}
