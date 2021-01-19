import { Component,OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CartService } from './services/cart.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  private unsub: Subject<any> = new Subject();
  title = 'KB';
  cartinfo: boolean = false;
  error:any;
  cartItems:any;
  isNotEmpty:boolean = true;
  cartnum = 0;
  cart: number = 1;

  constructor(private cartService: CartService) { }
  fillCart(){

    this.cartService.getSpecificCart(this.cartService.retrieveCart()).pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.cartItems = clothes
     
      console.log(clothes)
    },err => {
      this.error = err
    });
  }
  
  


  opencart(){
    
    this.cartinfo = !this.cartinfo
    if(this.cartinfo == true){
      this.fillCart()
      if(this.cartItems != undefined){
        this.cartnum++
      }
     
      if(this.cartnum >= 1){
        
        this.isNotEmpty = true;
        console.log(this.cartnum)
        console.log(this.isNotEmpty)
      }
      else {
        this.isNotEmpty = false;
      }
      
    }
  }

  checkEmpty(key){
    if(this.cart == 0){
      delete this.cartItems[key]
    }
  }

    ngOnDestroy(){
      this.unsub.next();
      this.unsub.complete();
    }
  }



