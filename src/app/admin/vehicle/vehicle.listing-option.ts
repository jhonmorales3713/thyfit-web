import { DeliveryStatus, DeliveryType } from "src/app/admin/warehouse/inquiry/constant";
import { ItemType } from "../item-type/item-type.listing.model";
import { CargoType } from "../cargo-type/cargo-type.listing.model";
import { VehicleMake } from "../vehicle-make/vehicle-make.listing.model";
import { VehicleModel } from "../vehicle-model/vehicle-model.listing.model";
import { GasType } from "../gas-type/gas-type.listing.model";
import { VehicleStatus, VehicleTransmission } from "./constant";

export class VehicleListingOption {
    page: number;
    search: string;
    limit: number = 15;
    sortBy: string;

    vehicleMake: VehicleMake;
    vehicleModel: VehicleModel;
    transmission: VehicleTransmission;
    gasType: GasType;
    type: CargoType;
    status: VehicleStatus;
    registryDateFrom: Date;
    registryDateTo: Date;
    registryExpirationFrom: Date;
    registryExpirationTo: Date;
    lastMaintennanceDateFrom: Date;
    lastMaintennanceDateTo: Date;
}

export class VehicleDropdownListingOption {
    plateNumber : string;
}