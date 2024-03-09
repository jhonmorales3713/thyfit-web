import { Component, EventEmitter, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Translations } from 'src/app/shared/translation';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ModalResponse, ModalType } from 'src/app/shared/modal/modal';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericPage } from 'src/app/shared/generic.page';
import { UserStatus, UserStatuses } from './constant';
import { UserListingOption } from './user.listing-option';
import { UserRoleListingOption } from '../user-role/user-role.listing-option';
import { UserService } from './user.service';
import { User } from './user.model';
import { PermissionService } from 'src/app/shared/services/permission.service';

@Component({
  templateUrl: './user.page.html'
})
export class UserPage extends GenericPage implements OnInit {
  T =Translations;
	isLoading = true;
	onLoaded = false;
  users : User[] = [];
  typingTimer: any;
  sortDirection = '+';
  UserStatuses = UserStatuses;
  UserStatus = UserStatus;
  doneTypingInterval: number = 500; // Adjust this according to your preference
  data: string;

  listingOption: UserListingOption = new UserListingOption();
  additionalParams : any = [];
  newBtn = new EventEmitter<boolean>();
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private container: ViewContainerRef,
    private userService: UserService,
    private notification: AppNotificationService,
    private permission: PermissionService
  ){
    super(route,activatedRoute, container, notification, permission);
  }
  ngOnInit() {
    this.notification.setRootViewContainerRef(this.container);
    this.loadAdditionalParams();
    this.listingOption.search = this.activatedRoute.snapshot.queryParams["search"];
    this.listingOption.sortBy = this.activatedRoute.snapshot.queryParams["sortBy"];
    this.listingOption.page = this.activatedRoute.snapshot.queryParams["page"];
    this.listingOption.status = this.activatedRoute.snapshot.queryParams["status"];

    this.loadContent();
  }
  loadAdditionalParams() {
    this.additionalParams["status"] = this.listingOption["status"];
  }
  async loadContent () {
    this.loadAdditionalParams();
    this.route.navigate([], {
      queryParams: {
        page: this.listingOption.page,
        search: this.listingOption.search,
        sortBy: this.listingOption.sortBy,
        ...this.additionalParams
      },
      queryParamsHandling: 'merge',
    });
    this.isLoading = true;
    this.users =[];
    await this.userService.users(this.listingOption).subscribe(data => {
      data["data"].forEach((res) => {
        var userRole = new User();
        userRole.format(res);
        this.users.push(userRole);
      });
      this.users["page"] = this.activatedRoute.snapshot.queryParams["page"] ?? 1;
      this.users["totalRows"] = data["totalRows"];
      this.users["limit"] = data["limit"];
      this.isLoading = false;
      this.onLoaded = true;
    });
  }
  async search() {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.loadContent();
    }, this.doneTypingInterval);
  }
  async navigate(page) {
    this.listingOption.page = page;
    this.loadContent();
  }
  async sortBy(columnName:string) {
    if (this.listingOption.sortBy !== this.sortDirection+columnName) {
      this.sortDirection = "-";
    }
    this.listingOption.page = 1;
    this.sortDirection = this.sortDirection == "+" ? "-" : "+";
    this.listingOption.sortBy = this.sortDirection + columnName;
    this.loadContent();
  }
}
