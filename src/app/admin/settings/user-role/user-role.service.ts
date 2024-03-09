import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService extends ApiService {
  create (payload : any) {
    let request = this.postRequest('user-role/', payload);
    return request;
  }
  update (id: number ,payload : any) {
    let request = this.putRequest('user-role/update/'+id, payload);
    return request;
  }
  dropdown (name: string) {
    let request = this.getRequest('user-role/dropdown?name='+name);
    return request;
  }
  show (id:number) {
    let request = this.getRequest('user-role/show/' + id);
    return request;
  }
  setActive (id:number) {
    let request = this.getRequest('user-role/setActive/' + id);
    return request;
  }
  setInactive (id:number) {
    let request = this.getRequest('user-role/setInactive/' + id);
    return request;
  }
  userRoles (options: any) {
    this.setParameters(options);
    let request = this.getRequest('user-role?'+this.queryParams);
    return request;
  }
}
