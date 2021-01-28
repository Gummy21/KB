import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  clickEvent = new EventEmitter<any>();


  constructor() { }
}
