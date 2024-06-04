import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  private readonly TOKEN_KEY = "access_token";

  constructor() { }

  getToken():string | null{
    return this.TOKEN_KEY
  }
  
  setToken(token: string):void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  removeToken():void{
    localStorage.removeItem(this.TOKEN_KEY)
  }
}
