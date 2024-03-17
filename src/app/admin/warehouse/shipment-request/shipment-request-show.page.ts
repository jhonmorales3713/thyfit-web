import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { ShipmentRequest } from './shipment-request.model';
import { HttpStatusCode } from '@angular/common/http';
import { PermissionService } from 'src/app/shared/services/permission.service';
import { SharedPermissions } from 'src/app/shared/constant';
import { ShipmentRequestService } from './shipment-request.service';
import { DeliveryStatuses, DeliveryType, DeliveryTypes } from '../inquiry/constant';
import { ShipmentRequestForm } from './shipment-request.form';
import { ShipmentRequestStatuses } from './constant';
@Component({
  templateUrl: './shipment-request-show.page.html',
})
export class ShipmentRequestShowPage extends GenericPage implements OnInit{
    T = Translations;
    isLoading = true;
    id: number;
    shipmentRequest: ShipmentRequest;
    DeliveryStatus= DeliveryStatuses;
    DeliveryType = DeliveryType;
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
      // show error
      this.id = this.activatedRoute.snapshot.params["id"];
      this.shipmentRequestService.show(this.id).subscribe({
        next: (shipmentRequest) => {
          this.shipmentRequest = shipmentRequest["data"];
          this.isLoading = false;
        }, error: () => {
          this.hasError = true;
        }
      });
    }
    decline() {
      this.shipmentRequestService.invalid(this.id).subscribe({
        next: (shipmentRequest) => {
          this.shipmentRequest = shipmentRequest["data"];
          this.isLoading = false;
          this.notification.success("Success","Shipment Request Updated!");
        }, error: (shipmentRequest) => {
          this.notification.error("Shipment Request", shipmentRequest.error.message);
        }
      });
    }
    approve() {
      this.shipmentRequestService.receive(this.id).subscribe({
        next: (shipmentRequest) => {
          this.shipmentRequest = shipmentRequest["data"];
          this.isLoading = false;
          this.notification.success("Success","Shipment Request Updated!");
        }, error: (shipmentRequest) => {
          this.notification.error("Shipment Request", shipmentRequest.error.message);
        }
      });
    }
    submit() {

    }
}
