import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends ApiService {
  create (payload : any) {
    let request = this.postRequest('vehicle/', payload);
    return request;
  }
  update (id: number ,payload : any) {
    let request = this.putRequest('vehicle/update/'+id, payload);
    return request;
  }
  show (id:number) {
    let request = this.getRequest('vehicle/show/' + id);
    return request;
  }
  setForMaintennance (id:number) {
    let request = this.getRequest('vehicle/setForMaintennance/' + id);
    return request;
  }
  setOnMaintennance (id:number) {
    let request = this.getRequest('vehicle/setOnMaintennance/' + id);
    return request;
  }
  setActive (id:number) {
    let request = this.getRequest('vehicle/setActive/' + id);
    return request;
  }
  dropdown(options: any = null) {  
    if (options) {
      this.setParameters(options);
    }
    let request = this.getRequest('vehicle/dropdown?'+this.queryParams);
    return request;
  }
  vehicles (options: any) {
    this.setParameters(options);
    let request = this.getRequest('vehicle?'+this.queryParams);
    return request;
  }
}
