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
@Component({
  templateUrl: './shipment-request-edit.page.html',
})
export class ShipmentRequestEditPage extends GenericPage implements OnInit{
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
      // show error
      this.id = this.activatedRoute.snapshot.params["id"];
      this.shipmentRequestService.show(this.id).subscribe({
        next: (shipmentRequest) => {
          this.shipmentRequest = new ShipmentRequestForm();
          this.shipmentRequest.fill(shipmentRequest["data"]);
          this.isLoading = false;
        }, error: (shipmentRequest) => {
          this.hasError = true;
        }
      });
    }
    submit(result: any) {
      if(result.httpStatusCode === HttpStatusCode.Ok) {
        this.notification.success("Success", "Shipment Request Updated.");
        setTimeout(() => {
          this.route.navigate(["/admin/shipment-requests/"+this.id]);
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
