import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { HttpStatusCode } from '@angular/common/http';
import { PermissionService } from 'src/app/shared/services/permission.service';
import { ShipmentRequestForm, ShipmentRequestItem } from './shipment-request.form';
import { ShipmentRequestService } from './shipment-request.service';
import { ShipmentRequestStatuses } from './constant';
import { InquiryFragment } from '../inquiry/inquiry.fragment';
@Component({
  templateUrl: './shipment-request-new.page.html',
})
export class ShipmentRequestNewPage extends GenericPage implements OnInit{
    T = Translations;
    isLoading = true;
    id: number;
    shipmentRequest: ShipmentRequestForm;
    ShipmentRequestStatuses = ShipmentRequestStatuses;
    constructor(
      private route: Router,
      private activatedRoute: ActivatedRoute,
      private container: ViewContainerRef,
      private notification: AppNotificationService,
      private shipmentRequestService: ShipmentRequestService,
      private permission: PermissionService) {
        super(route, activatedRoute, container, notification, permission);
    }
    ngOnInit() {
      this.notification.setRootViewContainerRef(this.container);
      this.shipmentRequest = new ShipmentRequestForm();
      this.shipmentRequest.autoAdd();
      this.shipmentRequest.inquiry = new InquiryFragment();
      this.shipmentRequest.isNew = true;
      this.isLoading = false;
    }
    submit(result: any) {
      if(result.httpStatusCode === HttpStatusCode.Ok) {
        this.notification.success("Success", "Shipment Request Created.");
        setTimeout(() => {
          this.route.navigate(["/admin/shipment-requests/"+result.data.data.id]);
        }, 1000);
      } else {
        this.notification.error("Error", "Please check your input.");
      }
    }
    setForMaintennance() {
      
    }
    setOnMaintennance() {
      
    }
    setActive() {
      
    }
}
