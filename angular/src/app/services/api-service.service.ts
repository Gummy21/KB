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

    getAll(){
      return this.http.get(`${this.apiUrl}`);
   }

    getSpecific(id){
      return this.http.get(`${this.apiUrl}/${id}`)
    }
}
