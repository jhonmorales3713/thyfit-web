import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { HttpStatusCode } from '@angular/common/http';
import { DeliveryStatus, DeliveryStatuses, DeliveryType, DeliveryTypes } from 'src/app/admin/warehouse/inquiry/constant';
import { forkJoin } from 'rxjs';
import { ShipmentRequestForm } from '../shipment-request.form';
import { ShipmentRequestStatuses } from '../constant';
import { ShipmentRequestService } from '../shipment-request.service';
import { ConsigneeService } from 'src/app/admin/consignee/consignee.service';
import { VehicleService } from 'src/app/admin/vehicle/vehicle.service';
import { ConsigneeListingOptions } from 'src/app/admin/consignee/consignee.listing.model';
import { VehicleDropdownListingOption, VehicleListingOption } from 'src/app/admin/vehicle/vehicle.listing-option';
import { ShipmentRequestItem } from '../shipment-request.model';
@Component({
    selector: 'shipment-request-form',
    templateUrl: './form.component.html',
})
export class ShipmentRequestFormComponent implements OnInit{
    T = Translations;
    id: number;
    isLoading = false;
    @Input() form: ShipmentRequestForm;
    @Input() isUpdate = true;
    @Output() submitForm = new EventEmitter<{httpStatusCode: HttpStatusCode, data: any}>();
    ShipmentRequestStatus= ShipmentRequestStatuses;
    DeliveryType = DeliveryType;
    consigneeParams = new ConsigneeListingOptions();
    vehicleParams = new VehicleDropdownListingOption();
    constructor(
      private activatedRoute: ActivatedRoute,
      private notification: AppNotificationService,
      private shipmentRequestService: ShipmentRequestService,
      public consigneeService: ConsigneeService,
      public vehicleService: VehicleService,
    ) {
    }
    ngOnInit() {
      // show error
      this.getLoading();
      this.consigneeParams.name = this.form.consignee.name;
      this.vehicleParams.plateNumber = this.form.vehicle.plateNumber;
    }
    async getLoading() {
      this.isLoading = false;
    }
    removeItem(item: ShipmentRequestItem) {
      this.form.items = this.form.items.filter(it=>it.id !== item.id);
    }
    submit() {
      // submitForm
      if(this.isUpdate) {
        this.shipmentRequestService.update(this.form.id, this.form.toPayLoad()).subscribe({
        next: (result) => {
          this.submitForm.emit({httpStatusCode: HttpStatusCode.Ok, data: result});  
        }, error: (failedRequest) => {
          FormUtils.setErrors(failedRequest.error.errors, this.form);
          this.submitForm.emit({httpStatusCode: HttpStatusCode.NotAcceptable, data: null});  
        }});
      } else {
        this.shipmentRequestService.create(this.form.toPayLoad()).subscribe({
        next: (result) => {
          this.submitForm.emit({httpStatusCode: HttpStatusCode.Ok, data: result});  
        }, error: (failedRequest) => {
          FormUtils.setErrors(failedRequest.error.errors, this.form);
          this.submitForm.emit({httpStatusCode: HttpStatusCode.NotAcceptable, data: null});  
        }});
      }
    }
}
