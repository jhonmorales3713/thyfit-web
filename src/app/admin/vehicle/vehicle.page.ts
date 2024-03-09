import { Component, EventEmitter, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Translations } from 'src/app/shared/translation';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ModalResponse, ModalType } from 'src/app/shared/modal/modal';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { AppNotificationService } from 'src/app/shared/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from './vehicle.service';
import { CargoTypeService } from '../cargo-type/cargo-type.service';
import { CargoType } from '../cargo-type/cargo-type.listing.model';
import { DeliveryStatus, DeliveryStatuses, DeliveryType, DeliveryTypes } from 'src/app/customer/inquiry/constant';
import { GenericPage } from 'src/app/shared/generic.page';
import { Vehicle } from './vehicle.model';
import { VehicleListingOption } from './vehicle.listing-option';
import { VehicleStatus, VehicleStatuses, VehicleTransmission, VehicleTransmissions } from './constant';
import { VehicleMake } from '../vehicle-make/vehicle-make.listing.model';
import { VehicleModel } from '../vehicle-model/vehicle-model.listing.model';
import { GasType } from '../gas-type/gas-type.listing.model';
import { VehicleMakeService } from '../vehicle-make/vehicle-make.service';
import { VehicleModelService } from '../vehicle-model/vehicle-model.service';
import { GasTypeService } from '../gas-type/gas-type.service';
import { PermissionService } from 'src/app/shared/services/permission.service';

@Component({
  templateUrl: './vehicle.page.html'
})
export class VehiclePage extends GenericPage implements OnInit {
  T =Translations;
	isLoading = true;
	onLoaded = false;
  vehicles : Vehicle[] = [];
  typingTimer: any;
  sortDirection = '+';
  VehicleStatus = VehicleStatuses;
  Transmissions = VehicleTransmissions;
  VehicleStat = VehicleStatus;
  Transmission = VehicleTransmission;
  doneTypingInterval: number = 500; // Adjust this according to your preference
  vehicle: Vehicle = new Vehicle();
  data: string;
  types : Array<CargoType> = [];
  vehicleMakes : Array<VehicleMake> = [];
  vehicleModels : Array<VehicleModel> = [];
  gasTypes : Array<GasType> = [];

  listingOption: VehicleListingOption = new VehicleListingOption();
  additionalParams : any = [];
  newBtn = new EventEmitter<boolean>();
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private container: ViewContainerRef,
    private notification: AppNotificationService,
    private permission: PermissionService,
    private vehicleService: VehicleService,
    private vehicleMakeService: VehicleMakeService,
    private vehicleModelService: VehicleModelService,
    private gasTypeService: GasTypeService,
    private typeService: CargoTypeService,
  ){
    super(route,activatedRoute, container, notification, permission);
  }
  ngOnInit() {
    this.notification.setRootViewContainerRef(this.container);
    this.loadAdditionalParams();
    this.listingOption.search = this.activatedRoute.snapshot.queryParams["search"];
    this.listingOption.sortBy = this.activatedRoute.snapshot.queryParams["sortBy"];
    this.listingOption.page = this.activatedRoute.snapshot.queryParams["page"];
    this.listingOption.status = this.activatedRoute.snapshot.queryParams["status"];
    
    this.listingOption.registryExpirationFrom = this.activatedRoute.snapshot.queryParams["registryExpirationFrom"];
    this.listingOption.registryExpirationTo = this.activatedRoute.snapshot.queryParams["registryExpirationTo"];
    this.listingOption.registryDateFrom = this.activatedRoute.snapshot.queryParams["registryDateFrom"];
    this.listingOption.registryDateTo = this.activatedRoute.snapshot.queryParams["registryDateTo"];
    this.listingOption.lastMaintennanceDateFrom = this.activatedRoute.snapshot.queryParams["lastMaintennanceDateFrom"];
    this.listingOption.lastMaintennanceDateTo = this.activatedRoute.snapshot.queryParams["lastMaintennanceDateTo"];
    this.listingOption.gasType = this.activatedRoute.snapshot.queryParams["gasType"];
    this.listingOption.vehicleMake = this.activatedRoute.snapshot.queryParams["vehicleMake"];
    this.listingOption.vehicleModel = this.activatedRoute.snapshot.queryParams["vehicleModel"];
    this.listingOption.type = this.activatedRoute.snapshot.queryParams["type"];

    this.loadPage();
  }
  loadAdditionalParams() {
    this.additionalParams["status"] = this.listingOption["status"];
    this.additionalParams["registryExpirationFrom"] = this.listingOption["registryExpirationFrom"];
    this.additionalParams["registryExpirationTo"] = this.listingOption["registryExpirationTo"];
    this.additionalParams["registryDateFrom"] = this.listingOption["registryDateFrom"];
    this.additionalParams["registryDateTo"] = this.listingOption["registryDateTo"];
    this.additionalParams["lastMaintennanceDateFrom"] = this.listingOption["lastMaintennanceDateFrom"];
    this.additionalParams["lastMaintennanceDateTo"] = this.listingOption["lastMaintennanceDateTo"];
    this.additionalParams["gasType"] = this.listingOption["gasType"];
    this.additionalParams["vehicleMake"] = this.listingOption["vehicleMake"];
    this.additionalParams["vehicleMake"] = this.listingOption["vehicleMake"];
    this.additionalParams["type"] = this.listingOption["type"];
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
    this.vehicles =[];
    await this.vehicleService.vehicles(this.listingOption).subscribe(data => {
      data["data"].forEach((res) => {
        this.vehicle = new Vehicle();
        this.vehicle.format(res);
        this.vehicles.push(this.vehicle);
      });
      this.vehicles["page"] = this.activatedRoute.snapshot.queryParams["page"] ?? 1;
      this.vehicles["totalRows"] = data["totalRows"];
      this.vehicles["limit"] = data["limit"];
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
    await this.vehicleMakeService.dropdown().subscribe(data => {
      data["data"].forEach(item => {
        this.vehicleMakes.push(item);
      })
    });
    await this.typeService.dropdown().subscribe(data => {
      data["data"].forEach(item => {
        this.types.push(item);
      })
    });
    await this.vehicleModelService.dropdown().subscribe(data => {
      data["data"].forEach(item => {
        this.vehicleModels.push(item);
      })
    });
    await this.gasTypeService.dropdown().subscribe(data => {
      data["data"].forEach(item => {
        this.gasTypes.push(item);
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
