import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends ApiService {
  getCustomers() {  
    let request = this.getRequest('customers/');
    return request;
  }
}
