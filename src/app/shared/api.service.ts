import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    
    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.apiKey}`
    });
    private params = new HttpParams();
    constructor(
        private httpClient: HttpClient, 
    ) {
    }
    setParameters(parameters = []) {
        for (const [key, value] of Object.entries(parameters)) {
            this.params.set(key, JSON.stringify(value));
        }
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
        console.log(JSON.stringify(payload));
        return this.httpClient.post(environment.apiUrl+endPoint,JSON.stringify(payload), {headers: this.headers, params: this.params});
    }
}
