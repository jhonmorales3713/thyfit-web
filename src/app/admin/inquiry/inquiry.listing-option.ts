import { DeliveryStatus, DeliveryType } from "src/app/customer/inquiry/constant";
import { ItemType } from "../item-type/item-type.listing.model";
import { CargoType } from "../cargo-type/cargo-type.listing.model";

export class InquiryListingOption {
    page: number;
    search: string;
    limit: number = 15;
    sortBy: string;
    deliveryType: DeliveryType;
    itemType: ItemType;
    cargoType: CargoType;
    status: DeliveryStatus;
    targetDateFrom: Date;;
    targetDateTo: Date;;
}