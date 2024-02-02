import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class LogInService extends ApiService {
  logIn(payload : any) {
    let request = this.postRequest('login/', payload);
    return request;
  }
  logOut() {
    let request = this.getRequest('logOut/');
    return request;
  }
}
