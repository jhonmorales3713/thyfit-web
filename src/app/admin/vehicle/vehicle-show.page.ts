import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { VehicleService } from './vehicle.service';
import { HttpStatusCode } from '@angular/common/http';
import { DeliveryStatus, DeliveryStatuses } from 'src/app/customer/inquiry/constant';
import { Vehicle } from './vehicle.model';
import { VehicleStatuses } from './constant';
@Component({
  templateUrl: './vehicle-show.page.html',
})
export class VehicleShowPage extends GenericPage implements OnInit{
    T = Translations;
    isLoading = true;
    id: number;
    vehicle: Vehicle;
    VehicleStatus= VehicleStatuses;
    constructor(
      private route: Router,
      private activatedRoute: ActivatedRoute,
      private container: ViewContainerRef,
      private notification: AppNotificationService,
      private vehicleService: VehicleService) {
        super(route, activatedRoute, container, notification);
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
    invalid() {
      this.vehicleService.invalid(this.id).subscribe({
        next: (vehicle) => {
          this.vehicle = new Vehicle();
          this.vehicle.format(vehicle["data"]);
          this.isLoading = false;
          this.notification.success("Success","Vehicle Updated!");
        }, error: (vehicle) => {
          this.notification.error("Vehicle", vehicle.error.message);
        }
      });
    }
}
