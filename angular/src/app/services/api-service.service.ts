import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiUrl: string = 'http://localhost:8887/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


    getSpecific(id){
      return this.http.get(`${this.apiUrl}${id}`)
    }
    
    getFilter(sort,size,gender){ 
      return this.http.get(`${this.apiUrl}filter?sort=${sort}&size=${size}&gender=${gender}`)
    }

    getGender(gender){
      return this.http.get(`${this.apiUrl}?gender=${gender}`)
     
    }
}
