import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit,OnDestroy {
  private unsub: Subject<any> = new Subject();
  items:any;
  error:any;

  constructor(private cartService: CartService) { }

  ngOnInit(){ 
    this.cartService.getSpecificCart(this.cartService.retrieveCart()).pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.items = clothes
     
      console.log(clothes)
    },err => {
      this.error = err
    });
  }

  ngOnDestroy(){
    this.unsub.next();
    this.unsub.complete();
  }
}
