import { Component, OnInit } from '@angular/core';
import { products } from '../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  share(){
    window.alert('This product has been shared')
  }
  notifyMe() {
    window.alert('You will be notified when the product goes on sale');
  }
}
