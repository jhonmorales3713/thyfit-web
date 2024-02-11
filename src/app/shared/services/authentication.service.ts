import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends ApiService {
  private authenticationData: any;

  logIn(payload : any) {
    let request = this.postRequest('login/', payload);
    return request;
  }

  setIsAuthenticated (authenticationData: any) {
    localStorage.setItem('token', authenticationData);
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  logOut() {
    let request = this.getRequest('logOut/');
    return request;
  }
}
