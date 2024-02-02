import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends ApiService {

  public async isLoggedIn(): Promise<any> {
    await this.getRequest("session/authenticate/").subscribe((data:any) => {
      return data.loggedIn;
    });
  }
}
