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
  products =  {};
  error:any;
  index: 1;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(){
    this.apiService.getAll().pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.products = clothes
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
