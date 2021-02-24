import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = [];
  apiUrl =  "http://localhost:8887/api/";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  addToCart(item){
    //add id to cart when btn clicked in details tab
    this.cart.push(item)
    
  }

  getSpecificCart(cart){
    
    return this.http.get(`${this.apiUrl}cart/${cart}`)
  }

  
  retrieveCart(){
    // Send db ids
    
    return this.cart;
  }

  removeFromCart(index){
   
    this.cart.splice(index,1);
   
    return this.cart;
  }
}
