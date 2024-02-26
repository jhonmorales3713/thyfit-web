import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ItemType } from 'src/app/admin/item-type/item-type.listing.model';
import { ItemTypeService } from 'src/app/admin/item-type/item-type.service';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { LoginForm } from 'src/app/admin/login/login.form';
import { InquiryForm } from '../inquiry/inquiry.form';
import { CargoType } from 'src/app/admin/cargo-type/cargo-type.listing.model';
import { CargoTypeService } from 'src/app/admin/cargo-type/cargo-type.service';
import { InquiryService } from 'src/app/admin/inquiry/inquiry.service';
import { DeliveryType, DeliveryTypes } from '../inquiry/constant';
import { FormUtils } from 'src/app/shared/form-utils';

@Component({
  selector: 'customer-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit{
  itemTypes : Array<ItemType> = [];
  cargoTypes : Array<CargoType> = [];
  form:InquiryForm = new InquiryForm();
  DeliveryType = DeliveryTypes;
  constructor(
    private itemTypeService: ItemTypeService,
    private cargoTypeService: CargoTypeService,
    private container: ViewContainerRef,
    private notification: AppNotificationService,
    private inquiryService: InquiryService,
    private route : Router
  ) {
  }
  ngOnInit() {
    this.notification.setRootViewContainerRef(this.container); 
    this.loadPage();
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
  }
  inquire() {
    this.inquiryService.create(this.form.toPayLoad()).subscribe({
      next: (result) => {
        this.notification.error("Success","Inquiry Send");
        // console.log(result["data"].referenceNumber);
        // setTimeout(() => {console.log("SD")}, 20000);
        this.route.navigate(["customer/track-delivery"], { queryParams: { referenceNumber: result["data"]?.referenceNumber, blankSearch: true } })
        
      }, error: (failedRequest) => {
        FormUtils.setErrors(failedRequest.error.errors, this.form);
        console.log(this.form);
        this.notification.error("Error","Saving Failed");
      }
    });
  }
}
