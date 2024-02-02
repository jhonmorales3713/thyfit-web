import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {
  constructor(private authService: AuthenticationService, private router: Router) {

  }
  canActivateChild (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.authService.isLoggedIn().then((response) => response?.json())
    .then((user) => {
      if(!user) {
        this.router.navigate(["/login"]);
        return false;
      } else {
        return true;
      }
    });
    return true;
  }
  
}
