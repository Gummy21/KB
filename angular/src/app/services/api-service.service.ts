import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiUrl: string = 'http://localhost:8887/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


    getSpecific(id){
      return this.http.get(`${this.apiUrl}products/${id}`)
    }
    
    getFilter(sort,size){ 
      return this.http.get(`${this.apiUrl}?sort=${sort}}?size=${size}`)
    }

    getGender(gender){
      return this.http.get(`${this.apiUrl}?gender=${gender}`)
      console.log(`${this.apiUrl}?gender=${gender}`)
    }
}
