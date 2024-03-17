import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentRequestService extends ApiService {
  
  create (payload : any) {
    let request = this.postRequest('shipment-request/', payload);
    return request;
  }
  update (id: number ,payload : any) {
    let request = this.putRequest('shipment-request/update/'+id, payload);
    return request;
  }
  show (id:number) {
    let request = this.getRequest('shipment-request/show/' + id);
    return request;
  }
  receive (id:number) {
    let request = this.getRequest('shipment-request/receive/' + id);
    return request;
  }
  invalid (id:number) {
    let request = this.getRequest('shipment-request/invalid/' + id);
    return request;
  }
  dropdown(options: any = null) {  
    if (options) {
      this.setParameters(options);
    }
    let request = this.getRequest('itemtype/dropdown');
    return request;
  }
  requests (options: any) {
    this.setParameters(options);
    let request = this.getRequest('shipment-request?'+this.queryParams);
    return request;
  }
}
