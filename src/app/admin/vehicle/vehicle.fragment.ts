import { VehicleMake } from "../vehicle-make/vehicle-make.listing.model";
import { VehicleModel } from "../vehicle-model/vehicle-model.listing.model";

export interface VehicleFragment {
    id: number;
    plateNumber: string;
    make: VehicleMake;
    model: VehicleModel;
}