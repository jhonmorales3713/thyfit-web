import { Component, EventEmitter, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Translations } from 'src/app/shared/translation';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ModalResponse, ModalType } from 'src/app/shared/modal/modal';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InquiryService } from './inquiry.service';
import { InquiryListingOption } from './inquiry.listing-option';
import { Inquiry } from './inquiry.model';
import { ItemTypeService } from '../item-type/item-type.service';
import { CargoTypeService } from '../cargo-type/cargo-type.service';
import { ItemType } from '../item-type/item-type.listing.model';
import { CargoType } from '../cargo-type/cargo-type.listing.model';
import { DeliveryStatus, DeliveryStatuses, DeliveryType, DeliveryTypes } from 'src/app/customer/inquiry/constant';
import { GenericPage } from 'src/app/shared/generic.page';

@Component({
  templateUrl: './inquiry.page.html'
})
export class InquiryPage extends GenericPage implements OnInit {
  T =Translations;
	isLoading = true;
	onLoaded = false;
  inquiries : Inquiry[] = [];
  typingTimer: any;
  sortDirection = '+';
  DeliveryStatus = DeliveryStatuses;
  DelStatus = DeliveryStatus;
  doneTypingInterval: number = 500; // Adjust this according to your preference
  inquiry: Inquiry = new Inquiry();
  data: string;
  itemTypes : Array<ItemType> = [];
  cargoTypes : Array<CargoType> = [];
  DeliveryType = DeliveryType;
  DeliveryTypes = DeliveryTypes;
  listingOption: InquiryListingOption = new InquiryListingOption();
  additionalParams : any = [];
  newBtn = new EventEmitter<boolean>();
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private container: ViewContainerRef,
    private notification: AppNotificationService,
    private inquiryService: InquiryService,
    private itemTypeService: ItemTypeService,
    private cargoTypeService: CargoTypeService,
  ){
    super(route,activatedRoute, container, notification);
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
    this.listingOption.targetDateFrom = this.activatedRoute.snapshot.queryParams["targetDateFrom"];
    this.listingOption.targetDateTo = this.activatedRoute.snapshot.queryParams["targetDateTo"];
    this.listingOption.status = this.activatedRoute.snapshot.queryParams["status"];
    this.loadPage();
  }
  loadAdditionalParams() {
    this.additionalParams["itemType"] = this.listingOption["itemType"];
    this.additionalParams["targetDateFrom"] = this.listingOption["targetDateFrom"];
    this.additionalParams["targetDateTo"] = this.listingOption["targetDateTo"];
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
    this.inquiries =[];
    await this.inquiryService.inquiries(this.listingOption).subscribe(data => {
      data["data"].forEach((res) => {
        this.inquiry = new Inquiry();
        this.inquiry.format(res);
        this.inquiries.push(this.inquiry);
      });
      this.inquiries["page"] = this.activatedRoute.snapshot.queryParams["page"] ?? 1;
      this.inquiries["totalRows"] = data["totalRows"];
      this.inquiries["limit"] = data["limit"];
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
