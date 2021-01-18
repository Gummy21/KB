import { Component, OnInit, OnDestroy } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private unsub: Subject<any> = new Subject();
  m:any;
  w:any;
  error:any;
  men: Number = 1;
  women: Number = 2;
  isDatam: boolean = false;
  isDataw:boolean = false;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(){
    this.apiService.getGender(this.men).pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.m = clothes[0]
      console.log(clothes)
      this.isDatam = true;
    },err => {
      this.error = err
    });
    this.apiService.getGender(this.women).pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.w = clothes[0]
      console.log(clothes)
      this.isDataw = true;
    },err => {
      this.error = err
    });
    
  }

  ngOnDestroy(){
    this.unsub.next();
    this.unsub.complete();
  }
}
