import { Component, Input } from '@angular/core';
import { PermissionService } from 'src/app/shared/services/permission.service';
import { Translations } from 'src/app/shared/translation';
import { PermissionTags, Permissions } from '../settings/user-role/constant';
import { TAG as InquiryTag } from 'src/app/customer/inquiry/constant';
import { SharedPermissions } from 'src/app/shared/constant';

@Component({
  selector: 'admin-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class AdminSidenavComponent {
  T = Translations;
  Permissions = Permissions;
  PermissionTags = PermissionTags;
  SharedPermission = SharedPermissions;
  @Input('sideNavVisible') sideNavVisible:boolean = false;
  constructor(private permissionService: PermissionService) {
  }
  hasPermission (permission : string) {
    return this.permissionService.hasPermission(permission);
  }
  isAdmin () {
    return this.permissionService.isAdmin();
  }
  subMenu(item:any) {
    item.target.parentElement.classList.remove("initial");
    item.target.classList.remove("initial");
  }
}
