import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiUrl =  environment.API_URL ;
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
