import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    
    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage["token"] ? JSON.parse(localStorage["token"])?.access_token : ''}`
    });
    private params = new HttpParams();
    public queryParams = '';
    constructor(
        private httpClient: HttpClient, 
    ) {
        console.log(localStorage)
    }
    setParameters(parameters = []): ApiService {
        this.queryParams = '';
        this.params = new HttpParams();
        for (const [key, value] of Object.entries(parameters)) {
            this.params.set(key, JSON.stringify(value));
            if (value) {
                this.queryParams += key+"="+value+"&";
            }
        }
        return this;
    }
    setHeaders(headers = []) {
        for (const [key, value] of Object.entries(headers)) {
            this.headers.append(key, value);
        }
    }
    getRequest(endPoint:string) {
        return this.httpClient.get(environment.apiUrl+endPoint, {headers: this.headers, params: this.params});
    }
    postRequest(endPoint:string, payload: any) {
        return this.httpClient.post(environment.apiUrl+endPoint,JSON.stringify(payload), {headers: this.headers, params: this.params});
    }
    putRequest(endPoint:string, payload: any) {
        return this.httpClient.put(environment.apiUrl+endPoint,JSON.stringify(payload), {headers: this.headers, params: this.params});
    }
}
