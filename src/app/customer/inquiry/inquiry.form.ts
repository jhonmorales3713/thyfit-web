import { Injectable } from '@angular/core';
import { CargoType } from 'src/app/admin/cargo-type/cargo-type.listing.model';
import { ItemType } from 'src/app/admin/item-type/item-type.listing.model';
import { ApiService } from 'src/app/shared/api.service';
import { FormUtils } from 'src/app/shared/form-utils';
import { DeliveryType } from './constant';

export class InquiryForm extends FormUtils {
  id: number;
  quantity: number;
  contactNumber: string;
  targetDate: Date;
  referenceNumber: string;
  email: string;
  status: string;
  itemType: ItemType;
  deliveryType: DeliveryType;
  cargoType: CargoType;
  fill() {

  }
  copy() {

  }
  toPayLoad() {
    return {
      'quantity': this.quantity,
      'contactNumber': this.contactNumber,
      'targetDate': this.targetDate,
      'email': this.email,
      'itemType_id': this.itemType,
      'deliveryType': this.deliveryType,
      'cargoType_id': this.cargoType,
    }
  }
}
