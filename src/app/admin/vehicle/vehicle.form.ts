import { DeliveryStatus, DeliveryType } from "src/app/customer/inquiry/constant";
import { FormUtils } from "src/app/shared/form-utils";
import { VehicleMake } from "../vehicle-make/vehicle-make.listing.model";
import { VehicleModel } from "../vehicle-model/vehicle-model.listing.model";
import { GasType } from "../gas-type/gas-type.listing.model";
import { CargoType } from "../cargo-type/cargo-type.listing.model";
import { VehicleStatus } from "./constant";
import { DatePipe, formatDate } from "@angular/common";
import { FormInterface } from "src/app/shared/form.interface";

export class VehicleForm extends FormUtils implements FormInterface{
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
    
    vehicleMake: VehicleMake = new VehicleMake();
    vehicleModel: VehicleModel = new VehicleModel();
    gasType: GasType = new GasType();
    type: CargoType = new CargoType();
    status: VehicleStatus;
    registryDate: Date | string |null;
    registryExpiration: Date | string |null;
    lastMaintennanceDate: Date | string |null;
    createdAt: Date;
    canOnMaintennance: boolean;
    canForMaintennance: boolean;
    canActive: boolean;
    get canUpdate() {
      return this.canActive || this.canForMaintennance || this.canOnMaintennance;
    }
    fill(data: any) {
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
      this.registryDate =  new DatePipe('en-US').transform(data.registryDate, 'yyyy-MM-dd');;
      this.registryExpiration = new DatePipe('en-US').transform(data.registryExpiration, 'yyyy-MM-dd');
      this.lastMaintennanceDate = new DatePipe('en-US').transform(data.lastMaintennanceDate, 'yyyy-MM-dd');
      this.status = data.status;
      this.createdAt = data.createdAt;
      this.canActive = data.canActive;
      this.canForMaintennance = data.canForMaintennance;
      this.canOnMaintennance = data.canOnMaintennance;
    }
    toPayLoad() {
        return {
          'plateNumber': this.plateNumber,
          'year': this.year,
          'color': this.color,
          'vin': this.vin,
          'transmission': this.transmission,
          'chassisNumber': this.chassisNumber,
          'maxLoad': this.maxLoad,
          'price': this.price,
          'mileAge' : this.mileAge,
          'wheelCount': this.wheelCount,
          'make_id': this.vehicleMake.id,
          'model_id': this.vehicleModel.id,
          'gasType_id': this.gasType.id,
          'type_id': this.type.id,
          'registryDate': this.registryDate,
          'registryExpiration': this.registryExpiration,
          'lastMaintennanceDate': this.lastMaintennanceDate,
          'status': this.status,
        }
    }
}