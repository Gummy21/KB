
import { Component, OnInit, OnDestroy } from '@angular/core';

import {ApiServiceService} from '../services/api-service.service'


import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service'
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit,OnDestroy {
  
 

  private unsub: Subject<any> = new Subject();
  cloth: any;
  error:any;
  clothid = this.route.snapshot.paramMap.get('id');
  smclick:boolean = false;
  medclick:boolean = false;
  lgclick:boolean = false;
  click = {};
  check= false
  clicked = "yes"

  
  

  constructor(private apiService: ApiServiceService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private eventService:EventService) { }

  

 

  ngOnInit(){
    this.apiService.getSpecific(this.clothid).pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.cloth = clothes;
      this.click = this.cloth[0].size;
      this.checkSize(this.click)
    },err => {
      this.error = err
    });
    
  }

  sendToCart(cartId){
    this.cartService.addToCart(cartId);
    console.log(cartId)
  }

  ngOnDestroy(){
    this.unsub.next();
    this.unsub.complete();
  }

  checkSize(size){

    if(size === "S"){
      
      this.medclick = !this.medclick;
      this.lgclick = !this.lgclick;
      
    }
    else if (size === "M"){
     
      this.smclick = !this.smclick;
      this.lgclick = !this.lgclick;
    }
    else if (size ==="L"){
      
      this.smclick = !this.smclick;
      this.lgclick = !this.medclick;
    }
  }
  runFunc() {
    this.eventService.clickEvent.emit(this.clicked)
  }

}
