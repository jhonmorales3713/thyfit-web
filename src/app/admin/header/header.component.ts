import { Component, EventEmitter, Output } from '@angular/core';
import { LogInService } from '../login/login.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AdminHeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  constructor(public loginApiService: AuthenticationService,
    private route: Router){}
  sideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  async logOut() {
    await this.loginApiService.logOut();
    localStorage.removeItem('token');
    this.route.navigate(["/login"]);

  }
}
