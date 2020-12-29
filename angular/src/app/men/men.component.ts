import { Component, OnInit, OnDestroy } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit,OnDestroy {
  private unsub: Subject<any> = new Subject();
  products =  {};
  error:any;
  index: 1;
  Gender: Number = 1;
  sort: String = 'Sort by';
  size: String = 'Size';
  id:1;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(){
    this.apiService.getGender(this.Gender).pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.products = clothes
      console.log(clothes)
    },err => {
      this.error = err
    });
  }

  

  applyFilter(){
    this.apiService.getFilter(this.sort,this.size).pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.products = clothes
      console.log(this.sort)
      console.log(this.size)
    },err => {
      this.error = err
    });
  }
  counter(i: number){
    return new Array(i)
  }
  ngOnDestroy(){
    this.unsub.next();
    this.unsub.complete();
  }
}
