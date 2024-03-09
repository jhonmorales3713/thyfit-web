import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { SharedPermissions } from 'src/app/shared/constant';
import { User } from './user.model';
import { UserStatus, UserStatuses } from './constant';
import { UserService } from './user.service';
import { PermissionService } from 'src/app/shared/services/permission.service';
@Component({
  templateUrl: './user-show.page.html',
})
export class UserShowPage extends GenericPage implements OnInit{
  T = Translations;
  isLoading = true;
  id: number;
  user: User;
  SharedPermissions = SharedPermissions;
  UserStatuses = UserStatuses;
  UserStatus = UserStatus;
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private container: ViewContainerRef,
    private notification: AppNotificationService, 
    public userService: UserService,
    private permission: PermissionService) {
      super(route, activatedRoute, container, notification, permission);
  }
  ngOnInit() {
    this.notification.setRootViewContainerRef(this.container);
    // show error
    this.id = this.activatedRoute.snapshot.params["id"];
    this.userService.show(this.id).subscribe({
      next: (user) => {
        this.user = new User();
        this.user.format(user["data"]);
        this.isLoading = false;
      }, error: () => {
        this.hasError = true;
      }
    });
  }
  setActive() {
    this.userService.setActive(this.id).subscribe({
      next: (user) => {
        this.user = new User();
        this.user.format(user["data"]);
        this.isLoading = false;
        this.notification.success("Success","User Updated!");
      }, error: (user) => {
        this.notification.error("User ", user.error.message);
      }
    });
  }
  setInactive() {
    this.userService.setInactive(this.id).subscribe({
      next: (user) => {
        this.user = new User();
        this.user.format(user["data"]);
        this.isLoading = false;
        this.notification.success("Success","User Updated!");
      }, error: (user) => {
        this.notification.error("User ", user.error.message);
      }
    });
  }
}
