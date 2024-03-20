import { Component, EventEmitter, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Translations } from 'src/app/shared/translation';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ModalResponse, ModalType } from 'src/app/shared/modal/modal';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipmentRequestListingOption } from './shipment-request.listing-option';
import { ItemTypeService } from '../../item-type/item-type.service';
import { CargoTypeService } from '../../cargo-type/cargo-type.service';
import { ItemType } from '../../item-type/item-type.listing.model';
import { CargoType } from '../../cargo-type/cargo-type.listing.model';
import { DeliveryStatus, DeliveryStatuses, DeliveryType, DeliveryTypes } from 'src/app/admin/warehouse/inquiry/constant';
import { GenericPage } from 'src/app/shared/generic.page';
import { PermissionService } from 'src/app/shared/services/permission.service';
import { ShipmentRequestService } from './shipment-request.service';
import { ShipmentRequestListing } from './shipment-request.model';
import { ShipmentRequestStatuses } from './constant';

@Component({
  templateUrl: './shipment-request.page.html'
})
export class ShipmentRequestPage extends GenericPage implements OnInit {
  T =Translations;
	isLoading = true;
	onLoaded = false;
  requests : ShipmentRequestListing[] = [];
  typingTimer: any;
  sortDirection = '+';
  DeliveryStatus = DeliveryStatuses;
  ShipmentRequestStatuses = ShipmentRequestStatuses;
  DelStatus = DeliveryStatus;
  doneTypingInterval: number = 500; // Adjust this according to your preference
  data: string;
  itemTypes : Array<ItemType> = [];
  cargoTypes : Array<CargoType> = [];
  DeliveryType = DeliveryType;
  DeliveryTypes = DeliveryTypes;
  listingOption: ShipmentRequestListingOption = new ShipmentRequestListingOption();
  additionalParams : any = [];
  newBtn = new EventEmitter<boolean>();
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private container: ViewContainerRef,
    private notification: AppNotificationService,
    private shipmentRequestService: ShipmentRequestService,
    private itemTypeService: ItemTypeService,
    private cargoTypeService: CargoTypeService,
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
    this.listingOption.itemType = this.activatedRoute.snapshot.queryParams["itemType"];
    this.listingOption.deliveryType = this.activatedRoute.snapshot.queryParams["deliveryType"];
    this.listingOption.cargoType = this.activatedRoute.snapshot.queryParams["cargoType"];
    this.listingOption.deliveryDateFrom = this.activatedRoute.snapshot.queryParams["deliveryDateFrom"];
    this.listingOption.deliveryDateTo = this.activatedRoute.snapshot.queryParams["deliveryDateTo"];
    this.listingOption.status = this.activatedRoute.snapshot.queryParams["status"];
    this.loadPage();
  }
  loadAdditionalParams() {
    this.additionalParams["itemType"] = this.listingOption["itemType"];
    this.additionalParams["deliveryDateFrom"] = this.listingOption["deliveryDateFrom"];
    this.additionalParams["deliveryDateTo"] = this.listingOption["deliveryDateTo"];
    this.additionalParams["deliveryType"] = this.listingOption["deliveryType"];
    this.additionalParams["cargoType"] = this.listingOption["cargoType"];
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
    this.requests =[];
    await this.shipmentRequestService.requests(this.listingOption).subscribe(data => {
      data["data"].forEach((res) => {
        this.requests = data["data"];
      });
      this.requests["page"] = this.activatedRoute.snapshot.queryParams["page"] ?? 1;
      this.requests["totalRows"] = data["totalRows"];
      this.requests["limit"] = data["limit"];
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
  async loadPage() {
    await this.itemTypeService.dropdown().subscribe(data => {
      data["data"].forEach(item => {
        this.itemTypes.push(item);
      })
    });
    await this.cargoTypeService.dropdown().subscribe(data => {
      data["data"].forEach(item => {
        this.cargoTypes.push(item);
      })
    });
    this.loadContent();
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
