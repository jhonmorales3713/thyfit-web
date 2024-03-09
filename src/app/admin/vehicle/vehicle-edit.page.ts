import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Translations } from 'src/app/shared/translation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from 'src/app/shared/form-utils';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { GenericPage } from 'src/app/shared/generic.page';
import { VehicleService } from './vehicle.service';
import { DeliveryStatus, DeliveryStatuses } from 'src/app/customer/inquiry/constant';
import { Vehicle } from './vehicle.model';
import { VehicleStatuses, VehicleTransmissions } from './constant';
import { VehicleForm } from './vehicle.form';
import { HttpStatusCode } from '@angular/common/http';
import { PermissionService } from 'src/app/shared/services/permission.service';
@Component({
  templateUrl: './vehicle-edit.page.html',
})
export class VehicleEditPage extends GenericPage implements OnInit{
    T = Translations;
    isLoading = true;
    id: number;
    vehicle: VehicleForm;
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
          this.vehicle = new VehicleForm();
          this.vehicle.fill(vehicle["data"]);
          this.isLoading = false;
        }, error: (vehicle) => {
          this.hasError = true;
        }
      });
    }
    submit(result: any) {
      if(result.httpStatusCode === HttpStatusCode.Ok) {
        this.notification.success("Success", "Vehicle Updated.");
        setTimeout(() => {
          this.route.navigate(["/admin/vehicles/"+this.id]);
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
