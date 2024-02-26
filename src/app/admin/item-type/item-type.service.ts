import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemTypeService extends ApiService {
  create (payload : any) {
    let request = this.postRequest('itemtype/', payload);
    return request;
  }
  dropdown(options: any = null) {  
    if (options) {
      this.setParameters(options);
    }
    let request = this.getRequest('itemtype/dropdown');
    return request;
  }
}
