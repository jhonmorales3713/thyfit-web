import { Injectable } from '@angular/core';
import { CargoType } from 'src/app/admin/cargo-type/cargo-type.listing.model';
import { ItemType } from 'src/app/admin/item-type/item-type.listing.model';
import { ApiService } from 'src/app/shared/api.service';
import { FormUtils } from 'src/app/shared/form-utils';
import { DeliveryType } from '../inquiry/constant';
import { VehicleFragment } from '../../vehicle/vehicle.fragment';
import { InquiryFragment } from '../inquiry/inquiry.fragment';
import { ConsigneeFragment } from '../../consignee/consignee.fragment';
import { ShipmentRequestStatus } from './constant';

export class ShipmentRequestItem extends FormUtils {
  name: string;
  quantity: number;
  id: number;
  fill (data: any) {
    this.name = data.name;
    this.quantity = data.quantity;
    this.id = data.id;
  }
}
export class ShipmentRequestForm extends FormUtils {
  id: number;
  vehicle: VehicleFragment;
  status: ShipmentRequestStatus;
  inquiry: InquiryFragment;
  consignee : ConsigneeFragment;
  items : ShipmentRequestItem[] = [];
  deliveryDate: Date;
  createdAt: Date;
  origin: string;
  destination: string;
  fill(data: any) {
    this.id = data.id;
    this.inquiry = data.inquiry;
    this.consignee = data.consignee;
    this.status = data.status;
    this.vehicle = data.vehicle;
    data.items.forEach(item => {
      this.items.push(item);
    });
    this.deliveryDate = data.deliveryDate;
    this.origin = data.origin;
    this.destination = data.destination;
  }
  copy() {

  }
  toPayLoad() {
    return {
      'vehicle': this.vehicle.id,
      'inquiry': this.inquiry.id,
      'consignee': this.consignee.id,
      'items': this.items.map(it=> {
       return it.isNew ? it : it.id
      }),
      'deliveryDate': this.deliveryDate,
      'origin': this.origin,
      'destination': this.destination,
    }
  }
}
