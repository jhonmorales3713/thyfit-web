import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { UserRole } from './user-role.model';
import { Permissions, UserRoleStatus, UserRoleStatuses } from './constant';
import { UserRoleService } from './user-role.service';
import { SharedPermissions } from 'src/app/shared/constant';
import { PermissionService } from 'src/app/shared/services/permission.service';
@Component({
  templateUrl: './user-role-show.page.html',
})
export class UserRoleShowPage extends GenericPage implements OnInit, AfterViewInit{
  T = Translations;
  isLoading = true;
  id: number;
  userRole: UserRole;
  SharedPermissions = SharedPermissions;
  UserRoleStatus = UserRoleStatuses;
  UserRoleStat = UserRoleStatus;
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private container: ViewContainerRef,
    private notification: AppNotificationService,
    public userRoleService: UserRoleService,
    private permission: PermissionService) {
      super(route, activatedRoute, container, notification, permission);
  }
  ngOnInit() {
    this.notification.setRootViewContainerRef(this.container);
    // show error
    this.id = this.activatedRoute.snapshot.params["id"];
    this.userRoleService.show(this.id).subscribe({
      next: (userRole) => {
        this.userRole = new UserRole();
        this.userRole.format(userRole["data"]);
        this.isLoading = false;
      }, error: () => {
        this.hasError = true;
      }
    });
  }
  ngAfterViewInit(): void {
    if(!this.permission.isAdmin()) {
      this.route.navigate(['/admin/access-denied']);
    }
  }
  setActive() {
    this.userRoleService.setActive(this.id).subscribe({
      next: (userRole) => {
        this.userRole = new UserRole();
        this.userRole.format(userRole["data"]);
        this.isLoading = false;
        this.notification.success("Success","User Role Updated!");
      }, error: (userRole) => {
        this.notification.error("User Role", userRole.error.message);
      }
    });
  }
  setInactive() {
    this.userRoleService.setInactive(this.id).subscribe({
      next: (userRole) => {
        this.userRole = new UserRole();
        this.userRole.format(userRole["data"]);
        this.isLoading = false;
        this.notification.success("Success","User Role Updated!");
      }, error: (userRole) => {
        this.notification.error("User Role", userRole.error.message);
      }
    });
  }
}
