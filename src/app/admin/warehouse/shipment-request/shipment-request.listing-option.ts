import { DeliveryStatus, DeliveryType } from "src/app/admin/warehouse/inquiry/constant";
import { ItemType } from "../../item-type/item-type.listing.model";
import { CargoType } from "../../cargo-type/cargo-type.listing.model";

export class ShipmentRequestListingOption {
    page: number;
    search: string;
    limit: number = 15;
    sortBy: string;
    deliveryType: DeliveryType;
    itemType: ItemType;
    cargoType: CargoType;
    status: DeliveryStatus;
    deliveryDateFrom: Date;
    deliveryDateTo: Date;
}