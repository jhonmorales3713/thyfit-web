import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { HttpStatusCode } from '@angular/common/http';
import { DeliveryStatus, DeliveryStatuses } from 'src/app/admin/warehouse/inquiry/constant';
import { Vehicle } from '../vehicle.model';
import { VehicleStatuses, VehicleTransmission, VehicleTransmissions } from '../constant';
import { VehicleService } from '../vehicle.service';
import { VehicleForm } from '../vehicle.form';
import { VehicleMake } from '../../vehicle-make/vehicle-make.listing.model';
import { VehicleModel } from '../../vehicle-model/vehicle-model.listing.model';
import { GasType } from '../../gas-type/gas-type.listing.model';
import { CargoType } from '../../cargo-type/cargo-type.listing.model';
import { VehicleMakeService } from '../../vehicle-make/vehicle-make.service';
import { VehicleModelService } from '../../vehicle-model/vehicle-model.service';
import { GasTypeService } from '../../gas-type/gas-type.service';
import { CargoTypeService } from '../../cargo-type/cargo-type.service';
import { forkJoin } from 'rxjs';
@Component({
    selector: 'vehicle-form',
    templateUrl: './form.component.html',
})
export class VehicleFormComponent implements OnInit{
    T = Translations;
    id: number;
    isLoading = false;
    @Input() form: VehicleForm;
    @Input() isUpdate = true;
    @Output() submitForm = new EventEmitter<{httpStatusCode: HttpStatusCode, data: any}>();
    VehicleTransmissions = VehicleTransmissions;
    VehicleTransmission = VehicleTransmission;
    VehicleStatus= VehicleStatuses;
    vehicleMakes : Array<VehicleMake> = [];
    vehicleModels : Array<VehicleModel> = [];
    gasTypes : Array<GasType> = [];
    types : Array<CargoType> = [];
    constructor(
      private activatedRoute: ActivatedRoute,
      private vehicleMakeService: VehicleMakeService,
      private vehicleModelService: VehicleModelService,
      private gasTypeService: GasTypeService,
      private typeService: CargoTypeService,
      private notification: AppNotificationService,
      private vehicleService: VehicleService) {
    }
    ngOnInit() {
      // show error
      this.getLoading();
    }
    async getLoading() {
      this.isLoading = true;
      await forkJoin([
        this.vehicleMakeService.dropdown(),
        this.vehicleModelService.dropdown(),
        this.typeService.dropdown(),
        this.gasTypeService.dropdown(),
      ]).subscribe({next:([make, model, type, gasType])=> {
        make["data"].forEach(item => {
          this.vehicleMakes.push(item);
        });
        model["data"].forEach(item => {
          this.vehicleModels.push(item);
        });
        type["data"].forEach(item => {
          this.types.push(item);
        });
        gasType["data"].forEach(item => {
          this.gasTypes.push(item);
        });
        this.isLoading = false;
      }});
    }
    submit() {
      // submitForm
      if(this.isUpdate) {
        this.vehicleService.update(this.form.id, this.form.toPayLoad()).subscribe({
        next: (result) => {
          this.submitForm.emit({httpStatusCode: HttpStatusCode.Ok, data: result});  
        }, error: (failedRequest) => {
          FormUtils.setErrors(failedRequest.error.errors, this.form);
          this.submitForm.emit({httpStatusCode: HttpStatusCode.NotAcceptable, data: null});  
        }});
      } else {
        this.vehicleService.create(this.form.toPayLoad()).subscribe({
        next: (result) => {
          this.submitForm.emit({httpStatusCode: HttpStatusCode.Ok, data: result});  
        }, error: (failedRequest) => {
          FormUtils.setErrors(failedRequest.error.errors, this.form);
          this.submitForm.emit({httpStatusCode: HttpStatusCode.NotAcceptable, data: null});  
        }});
      }
    }
}
