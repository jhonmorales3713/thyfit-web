import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService extends ApiService {
  create (payload : any) {
    let request = this.postRequest('foods/', payload);
    return request;
  }
  getFoods(options: any = null) {  
    if (options) {
      this.setParameters(options).getRequest('foods/');
      console.log(options);
    }
    let request = this.getRequest('foods/');  
    console.log(request);
    return request;
  }
}
