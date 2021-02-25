import { Component,OnDestroy,OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


import { environment } from '../environments/environment.prod'
import { CartService } from './services/cart.service'; 
import { EventService } from './services/event.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnDestroy,OnInit {


  private unsub: Subject<any> = new Subject();
  title = 'KB';
  cartinfo: boolean = false;
  error:any;
  cartItems:any;
  isNotEmpty:boolean = true;
  cartnum = 0;
  cart: number = 1;
  checker = 1;
  comp ="";
  boolean="";
  in: boolean = true;
  out: boolean = false;
  test = environment.test
  wait;
  constructor(private cartService: CartService, private eventService:EventService) { }
  
  ngOnInit(){
    this.eventService.clickEvent.subscribe(msg=>{
     
      this.fillCart()
      
    })
  }

  fillCart(){

    this.cartService.getSpecificCart(this.cartService.retrieveCart()).pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.cartItems = clothes
      
      
      if(this.cartItems.length >= 1 ){
        
        this.checker = this.cartItems.length;
        
        this.cartChecker()
      }
      
    },err => {
      this.error = err
    });
  }
  
  


  opencart(){
    
    this.cartinfo = !this.cartinfo
    if(this.cartinfo == true){
      this.cartChecker()

      } else{
   
        this.checker = 1;
        this.isNotEmpty = false;
        this.cartnum = 0;
      }
      }
     
  

  cartChecker(){
    
    if(this.cartItems == undefined || this.checker === this.cartItems.length){
      
      if(this.cartItems != undefined || this.cartItems > 0){
        this.cartnum++
        this.isNotEmpty = true;
       
      }
      else {
        this.isNotEmpty = false;
       

      }
    }
  }
  
  

  checkEmpty(key){
    if(this.cart == 0){

      this.out = true
      this.wait = setTimeout(()=>{
      
        this.cartItems.splice(key,1);
        this.out = false
        if(this.cartItems.length == 0){
          this.isNotEmpty = false;
        }
      },400)
      this.cartService.removeFromCart(key)  
      this.cartnum--
      this.cart = 1;
     
      

      if(this.checker <= 2){
        this.checker = 1;
      } else{
        this.checker--
      }
      
    }
  }

    ngOnDestroy(){
      this.unsub.next();
      this.unsub.complete();
    }
  }



