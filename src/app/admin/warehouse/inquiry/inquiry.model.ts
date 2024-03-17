import { DeliveryStatus, DeliveryType } from "src/app/admin/warehouse/inquiry/constant";
import { CargoType } from "../../cargo-type/cargo-type.listing.model";
import { ItemType } from "../../item-type/item-type.listing.model";

export class Inquiry {
    status : DeliveryStatus;
    id : number;
    email: string;
    cargoType: CargoType;
    itemType: ItemType;
    referenceNumber : string;
    contactNumber : string;
    quantity: number;
    targetDate: Date;
    deliveryType: DeliveryType;
    createdAt: Date;
    receivedAt: Date;
    canReceive: boolean;
    canInvalid: boolean;
    constructor() {
      
    }
    get canUpdateStatus() {
      return this.canInvalid || this.canInvalid;
    }
    public format(data: any) {
      this.id = data.id;
      this.email = data.email;
      this.cargoType = data.cargoType;
      this.contactNumber = data.contactNumber;
      this.itemType = data.itemType;
      this.referenceNumber = data.referenceNumber;
      this.quantity = data.quantity;
      this.deliveryType = data.deliveryType;
      this.targetDate = data.targetDate;
      this.receivedAt = data.receivedAt;
      this.createdAt = data.createdAt;
      this.canInvalid = data.canInvalid;
      this.canReceive = data.canReceive;
      this.status = data.status;
    }
}