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
    console.log(this.cart)
    console.log("before")
    this.cart.push(item)
    console.log(this.cart)
  }

  getSpecificCart(cart){
    console.log(cart)
    return this.http.get(`${this.apiUrl}cart/${cart}`)
  }

  
  retrieveCart(){
    // Send db ids
    console.log(this.cart)
    return this.cart;
  }
}
