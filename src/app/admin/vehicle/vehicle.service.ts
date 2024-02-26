import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends ApiService {
  create (payload : any) {
    let request = this.postRequest('inquiry/', payload);
    return request;
  }
  show (id:number) {
    let request = this.getRequest('inquiry/show/' + id);
    return request;
  }
  receive (id:number) {
    let request = this.getRequest('inquiry/receive/' + id);
    return request;
  }
  invalid (id:number) {
    let request = this.getRequest('inquiry/invalid/' + id);
    return request;
  }
  showByRefNum (refNum : string) {
    let request = this.getRequest('inquiry/showByRefNum/' + refNum);
    return request;
  }
  dropdown(options: any = null) {  
    if (options) {
      this.setParameters(options);
    }
    let request = this.getRequest('itemtype/dropdown');
    return request;
  }
  vehicles (options: any) {
    this.setParameters(options);
    let request = this.getRequest('vehicle?'+this.queryParams);
    return request;
  }
}
