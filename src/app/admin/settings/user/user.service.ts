import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {
  create (payload : any) {
    let request = this.postRequest('user/', payload);
    return request;
  }
  update (id: number ,payload : any) {
    let request = this.putRequest('user/update/'+id, payload);
    return request;
  }
  dropdown (name: string) {
    let request = this.getRequest('user/dropdown?name='+name);
    return request;
  }
  show (id:number) {
    let request = this.getRequest('user/show/' + id);
    return request;
  }
  setActive (id:number) {
    let request = this.getRequest('user/setActive/' + id);
    return request;
  }
  setInactive (id:number) {
    let request = this.getRequest('user/setInactive/' + id);
    return request;
  }
  users (options: any) {
    this.setParameters(options);
    let request = this.getRequest('user?'+this.queryParams);
    return request;
  }
}
