import { CargoType } from "../../cargo-type/cargo-type.listing.model";
import { ItemType } from "../../item-type/item-type.listing.model";

export class InquiryFragment {
    id : number;
    cargoType: CargoType;
    itemType: ItemType;
    deliveryType: string;
    referenceNumber : string;
}