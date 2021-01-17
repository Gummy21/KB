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
  cart = ['9','10','11']
  cartItems:any;
  // cart:[]
  constructor(private cartService: CartService) { }
  fillCart(){
    // get Cart ids
    // this.cart = this.cartService.retrieveCart()
    this.cartService.getSpecificCart(this.cart).pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.cartItems = clothes
      console.log(clothes)
    },err => {
      this.error = err
    });
  }
  
  


  opencart(){
    
    this.cartinfo = !this.cartinfo
    if(this.cartinfo == true){
      this.fillCart();
    }
  }

    ngOnDestroy(){
      this.unsub.next();
      this.unsub.complete();
    }
  }



