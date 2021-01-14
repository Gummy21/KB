import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KB';
  cartinfo: boolean = false;

  opencart(){
      this.cartinfo = !this.cartinfo
    }
  }



