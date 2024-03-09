import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { DeliveryStatus, DeliveryStatuses } from 'src/app/customer/inquiry/constant';
import { HttpStatusCode } from '@angular/common/http';
import { UserStatuses } from './constant';
import { UserForm } from './user.form';
import { UserService } from './user.service';
import { PermissionService } from 'src/app/shared/services/permission.service';
@Component({
  templateUrl: './user-edit.page.html',
})
export class UserEditPage extends GenericPage implements OnInit{
    T = Translations;
    isLoading = true;
    id: number;
    user: UserForm;
    UserStatus = UserStatuses;
    constructor(
      private route: Router,
      private activatedRoute: ActivatedRoute,
      private container: ViewContainerRef,
      private notification: AppNotificationService,
      private userService: UserService,
      private permission: PermissionService) {
        super(route, activatedRoute, container, notification, permission);
    }
    ngOnInit() {
      this.notification.setRootViewContainerRef(this.container);
      // show error
      this.id = this.activatedRoute.snapshot.params["id"];
      this.userService.show(this.id).subscribe({
        next: (user) => {
          this.user = new UserForm();
          this.user.fill(user["data"]);
          this.isLoading = false;
        }, error: (user) => {
          this.hasError = true;
        }
      });
    }
    submit(result: any) {
      if(result.httpStatusCode === HttpStatusCode.Ok) {
        this.notification.success("Success", "User  Updated.");
        setTimeout(() => {
          this.route.navigate(["/admin/users/"+this.id]);
        }, 1000);
      } else {
        this.notification.error("Error", "Please check your input.");
      }
    }
}
