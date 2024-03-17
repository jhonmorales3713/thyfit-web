import { DeliveryStatus, DeliveryType } from "src/app/admin/warehouse/inquiry/constant";
import { CargoType } from "../../cargo-type/cargo-type.listing.model";
import { ItemType } from "../../item-type/item-type.listing.model";
import { Consignee } from "../../consignee/consignee.listing.model";
import { VehicleMake } from "../../vehicle-make/vehicle-make.listing.model";
import { VehicleModel } from "../../vehicle-model/vehicle-model.listing.model";
import { VehicleForm } from "../../vehicle/vehicle.form";
import { VehicleFragment } from "../../vehicle/vehicle.fragment";
import { InquiryFragment } from "../inquiry/inquiry.fragment";
import { ConsigneeFragment } from "../../consignee/consignee.fragment";

export interface ShipmentRequestListing {
    status : DeliveryStatus;
    id : number;
    cargoType: CargoType;
    itemType: ItemType;
    vehicle: VehicleFragment;
    referenceNumber : string;
    consignee : Consignee;
    deliveryDate: Date;
    deliveryType: DeliveryType;
    created_at: Date;
    origin: string;
    destination: string;
    canApprove: boolean;
    canDecline: boolean;
}
export interface ShipmentRequest {
    status : DeliveryStatus;
    id : number;
    vehicle: VehicleFragment;
    inquiry: InquiryFragment;
    consignee : ConsigneeFragment;
    items : ShipmentRequestItem[];
    deliveryDate: Date;
    deliveryType: DeliveryType;
    createdAt: Date;
    origin: string;
    destination: string;
    canApprove: boolean;
    canDecline: boolean;
}
export interface ShipmentRequestItem {
    name: string;
    quantity: number;
    id: number;
}