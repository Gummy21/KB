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
  checker:boolean;
  constructor(private cartService: CartService) { }

  ngOnInit(){ 
    this.cartService.getSpecificCart(this.cartService.retrieveCart()).pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.items = clothes
      if(clothes === undefined || this.items.length == 0){
        this.checker = false
        console.log(this.checker)
      } else {
        this.checker = true
        console.log(this.checker)
      }
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
