import { Component, Input, OnInit } from '@angular/core';
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
export class LoginPage implements OnInit{
  form: LoginForm = new LoginForm();
  constructor(public loginApiService: LogInService, 
    public notificationService: AppNotificationService, 
    public router: Router, 
    public authService: AuthenticationService ) {

  }
  async ngOnInit() {
    if (await this.authService.isLoggedIn()) {
      this.router.navigate(["/admin/home"]);
    }
  }
  logIn() {
    this.loginApiService.logIn(this.form.toPayLoad()).subscribe(data => {
      this.router.navigate(["/admin/home"]);
      this.notificationService.success("Success","Welcome!");
    }, failedRequest => {
      FormUtils.setErrors(failedRequest.error.errors,this.form)
      this.notificationService.error("Error","Please check the errors.");
    });
  }
}
