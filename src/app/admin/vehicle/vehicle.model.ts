import { DeliveryStatus, DeliveryType } from "src/app/customer/inquiry/constant";
import { CargoType } from "../cargo-type/cargo-type.listing.model";
import { ItemType } from "../item-type/item-type.listing.model";
import { VehicleMake } from "../vehicle-make/vehicle-make.listing.model";
import { VehicleModel } from "../vehicle-model/vehicle-model.listing.model";
import { GasType } from "../gas-type/gas-type.listing.model";
import { VehicleStatus } from "./constant";
import { FormUtils } from "src/app/shared/form-utils";

export class Vehicle extends FormUtils{
    id : number;
    plateNumber: string;
    year: number;
    color: string;
    vin: string;
    transmission: string;
    chassisNumber: string;
    maxLoad: number;
    price: number;
    mileAge: number;
    wheelCount: number;
    
    vehicleMake: VehicleMake;
    vehicleModel: VehicleModel;
    gasType: GasType;
    type: CargoType;
    status: VehicleStatus;
    registryDate: Date;
    registryExpiration: Date;
    lastMaintennanceDate: Date;
    createdAt: Date;
    canOnMaintennance: boolean;
    canForMaintennance: boolean;
    canActive: boolean;
    get canUpdate() {
      return this.canActive || this.canForMaintennance || this.canOnMaintennance;
    }
    public format(data: any) {
      this.id = data.id;
      this.plateNumber = data.plateNumber;
      this.year = data.year;
      this.color = data.color;
      this.vin = data.vin;
      this.transmission = data.transmission;
      this.chassisNumber = data.chassisNumber;
      this.maxLoad = data.maxLoad;
      this.price = data.price;
      this.mileAge = data.mileAge;
      this.wheelCount = data.wheelCount;
      this.vehicleMake = data.vehicleMake;
      this.vehicleModel = data.vehicleModel;
      this.gasType = data.gasType;
      this.type = data.type;
      this.registryDate = data.registryDate;
      this.registryExpiration = data.registryExpiration;
      this.lastMaintennanceDate = data.lastMaintennanceDate;
      this.status = data.status;
      this.createdAt = data.createdAt;
      this.canActive = data.canActive;
      this.canForMaintennance = data.canForMaintennance;
      this.canOnMaintennance = data.canOnMaintennance;
    }
}