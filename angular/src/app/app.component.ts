import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KB';
  cartinfo: boolean = false;
  cart = [
    {
      title:"Blue Shirt",
      img:"https://cdn.shopify.com/s/files/1/1735/5687/products/levis-blue-baggy-3.png?v=1490911974"
    }, 
    {
      title:"White Shirt",
      img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.topman.com%2Fwcsstore%2FTopMan%2Fimages%2Fcatalog%2FTM71T66MWHT_Zoom_F_1.jpg&f=1&nofb=1"
    },
    {
      title:"Blue Shirt",
      img:"https://cdn.shopify.com/s/files/1/1735/5687/products/levis-blue-baggy-3.png?v=1490911974"
    }, 
    {
      title:"White Shirt",
      img:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.topman.com%2Fwcsstore%2FTopMan%2Fimages%2Fcatalog%2FTM71T66MWHT_Zoom_F_1.jpg&f=1&nofb=1"
    }
  ]

  opencart(){
      this.cartinfo = !this.cartinfo
    }
  }



