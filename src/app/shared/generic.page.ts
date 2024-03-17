import { Component, ElementRef, EventEmitter, HostListener, Injectable, Input, OnInit, Output, ViewContainerRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InquiryService } from '../admin/warehouse/inquiry/inquiry.service';
import { AppNotificationService } from './services/notification.service';
import { ItemTypeService } from '../admin/item-type/item-type.service';
import { CargoTypeService } from '../admin/cargo-type/cargo-type.service';
import { PermissionService } from './services/permission.service';
import { PermissionTags, Permissions } from '../admin/settings/user-role/constant';
import { SharedPermissionList, SharedPermissions } from './constant';
@Injectable({
  providedIn: 'root'
})
export class GenericPage {
  Permissions = Permissions;
  PermissionTags = PermissionTags;
  SharedPermission = SharedPermissions;
  SharedPermissionList = SharedPermissionList;
  hasError = false;
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private containerRef: ViewContainerRef,
    private notif: AppNotificationService,
    private permissionService: PermissionService
  ) {
      
  }
  invalidAccess() {
  }
  hasPermission(permission:string) :boolean {
    return this.permissionService.hasPermission(permission);
  }
}
