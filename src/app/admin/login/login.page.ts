import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Translations } from 'src/app/shared/translation';
import { LoginForm } from './login.form';
import { FormUtils } from 'src/app/shared/form-utils';
import { LogInService } from './login.service';
import { AppNotificationService, NotificationService } from 'src/app/shared/services/notification.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.css']
})
export class LoginPage implements OnInit {
  form: LoginForm = new LoginForm();
  constructor(
    public notificationService: AppNotificationService,
    public router: Router,
    private viewContainerRef: ViewContainerRef,
    public authService: AuthenticationService) {
  }
  ngOnInit() {
    this.notificationService.setRootViewContainerRef(this.viewContainerRef);  
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/admin/home"]);
    }
  }
  logIn() {
    this.authService.logIn(this.form.toPayLoad()).subscribe(
      {
        next: (data) => {
          this.notificationService.success("Success","Welcome!");
          this.authService.setIsAuthenticated(data);
          this.router.navigate(["/admin/home"]);

        },error: (failedRequest) => {
          FormUtils.setErrors(failedRequest.error.errors,this.form)
          this.notificationService.error("Error","Please check the errors.");
        }
      }
    )
  }
}
