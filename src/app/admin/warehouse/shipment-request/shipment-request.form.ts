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
  quantity: number | any = '';
  id: number;
  fill (data: any) {
    this.name = data.name;
    this.quantity = data.quantity;
    this.id = data.id;
  }
  get isNullField() {
    return this.name == "" && this.quantity == "";
  }
  fields () {
    return ['quantity','name'];
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
  autoAdd() {
    const newItem = new ShipmentRequestItem();
    newItem.name = '';
    newItem.id = 0;
    newItem.isNew = true;
    this.items.push(newItem);
  }
  itemsFieldNull() {
    let allFieldNull = this.checkItemFields();
    if (!allFieldNull && this.autoAddedItemCount().length == 0) {
      this.autoAdd();
    }
    if (this.autoAddedItemCount().length > 1) {
      allFieldNull = this.checkItemFields();
      if (allFieldNull) {
        this.items.pop();
      }
    }
  }
  checkItemFields() {
    let allFieldNull = true;
    this.items[this.items.length-1].fields().forEach(field => {
      let item  =  this.items[this.items.length-1];
      if (item[field] !== "") {
        allFieldNull = false;
      }
    });
    return allFieldNull;
  }
  autoAddedItemCount() {
   return this.items.filter(it=> it.name =="" && it.quantity =="");
  }
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
      'vehicle': this.vehicle?.id,
      'inquiry': this.inquiry?.id,
      'consignee': this.consignee?.id,
      'items': this.items.slice(0, -1).map(it=> {
       return it.isNew && !it.isNullField ? {name: it.name, quantity: it.quantity} : {id: it.id, quantity: it.quantity, name: it.name}
      }),
      'deliveryDate': this.deliveryDate,
      'origin': this.origin,
      'destination': this.destination,
    }
  }
}
