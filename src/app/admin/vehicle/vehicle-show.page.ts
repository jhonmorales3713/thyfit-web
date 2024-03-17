import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { VehicleService } from './vehicle.service';
import { HttpStatusCode } from '@angular/common/http';
import { DeliveryStatus, DeliveryStatuses } from 'src/app/admin/warehouse/inquiry/constant';
import { Vehicle } from './vehicle.model';
import { VehicleStatuses, VehicleTransmissions } from './constant';
import { PermissionService } from 'src/app/shared/services/permission.service';
@Component({
  templateUrl: './vehicle-show.page.html',
})
export class VehicleShowPage extends GenericPage implements OnInit{
    T = Translations;
    isLoading = true;
    id: number;
    vehicle: Vehicle;
    VehicleTransmissions = VehicleTransmissions;
    VehicleStatus= VehicleStatuses;
    constructor(
      private route: Router,
      private activatedRoute: ActivatedRoute,
      private container: ViewContainerRef,
      private notification: AppNotificationService,
      private vehicleService: VehicleService,
      private permission: PermissionService) {
        super(route, activatedRoute, container, notification, permission);
    }
    ngOnInit() {
      this.notification.setRootViewContainerRef(this.container);
      // show error
      this.id = this.activatedRoute.snapshot.params["id"];
      this.vehicleService.show(this.id).subscribe({
        next: (vehicle) => {
          this.vehicle = new Vehicle();
          this.vehicle.format(vehicle["data"]);
          this.isLoading = false;
        }, error: (vehicle) => {
          this.hasError = true;
        }
      });
    }
    setForMaintennance() {
      this.vehicleService.setForMaintennance(this.id).subscribe({
        next: (vehicle) => {
          this.vehicle = new Vehicle();
          this.vehicle.format(vehicle["data"]);
          this.isLoading = false;
          this.notification.success("Success","Vehicle Updated!");
        }, error: (inquiry) => {
          this.notification.error("Vehicle", inquiry.error.message);
        }
      });
    }
    setOnMaintennance() {
      this.vehicleService.setOnMaintennance(this.id).subscribe({
        next: (vehicle) => {
          this.vehicle = new Vehicle();
          this.vehicle.format(vehicle["data"]);
          this.isLoading = false;
          this.notification.success("Success","Vehicle Updated!");
        }, error: (inquiry) => {
          this.notification.error("Vehicle", inquiry.error.message);
        }
      });
    }
    setActive() {
      this.vehicleService.setActive(this.id).subscribe({
        next: (vehicle) => {
          this.vehicle = new Vehicle();
          this.vehicle.format(vehicle["data"]);
          this.isLoading = false;
          this.notification.success("Success","Vehicle Updated!");
        }, error: (inquiry) => {
          this.notification.error("Vehicle", inquiry.error.message);
        }
      });
    }
}
