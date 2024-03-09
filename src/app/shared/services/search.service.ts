import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from '../interface/search-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(query: string | any): Observable<any[]> { // Specify the return type
    return this.http.get<[]>(`/api/search?query=${query}`);
  }
}