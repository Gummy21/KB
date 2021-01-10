import { Component, OnInit, OnDestroy } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.apiService.getSpecific(this.clothid).pipe(takeUntil(this.unsub)).subscribe(clothes => {
      this.cloth = clothes;
      this.click = this.cloth[0].size;
      this.checkSize(this.click)
    },err => {
      this.error = err
    });
    
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
}
