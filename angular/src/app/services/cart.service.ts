import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = [];
  apiUrl: string = 'http://localhost:8887/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  addToCart(item){
    //add id to cart when btn clicked in details tab
    this.cart.push(item)
  }

  getSpecificCart(cart){
    console.log(cart)
    return this.http.get(`${this.apiUrl}cart/${cart}`)
  }

  
  retrieveCart(){
    // Send db ids
    return this.cart;
  }
}
