import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { DeliveryStatus, DeliveryStatuses } from 'src/app/customer/inquiry/constant';
import { HttpStatusCode } from '@angular/common/http';
import { UserRoleForm } from './user-role.form';
import { UserRoleService } from './user-role.service';
import { UserRoleStatus, UserRoleStatuses } from './constant';
import { PermissionService } from 'src/app/shared/services/permission.service';
@Component({
  templateUrl: './user-role-new.page.html',
})
export class UserRoleNewPage extends GenericPage implements OnInit, AfterViewInit{
    T = Translations;
    isLoading = true;
    id: number;
    userRole: UserRoleForm;
    UserRoleStatus = UserRoleStatuses;
    constructor(
      private route: Router,
      private activatedRoute: ActivatedRoute,
      private container: ViewContainerRef,
      private notification: AppNotificationService,
      private userRoleService: UserRoleService,
      private permission: PermissionService) {
        super(route, activatedRoute, container, notification, permission);
    }
    ngOnInit() {
      this.notification.setRootViewContainerRef(this.container);
      // show error
      this.userRole = new UserRoleForm();
      this.isLoading = false;
    }
    ngAfterViewInit(): void {
      if(!this.permission.isAdmin()) {
        this.route.navigate(['/admin/access-denied']);
      }
    }
    submit(result: any) {
      if(result.httpStatusCode === HttpStatusCode.Ok) {
        this.notification.success("Success", "User Role Created.");
        setTimeout(() => {
          this.route.navigate(["/admin/user-roles/"+result.data.data.id]);
        }, 1000);
      } else {
        this.notification.error("Error", "Please check your input.");
      }
    }
}
