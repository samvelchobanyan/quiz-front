import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input()
  product!: Product;

  share(){
    alert('shared');
  }

  onNotify(){
    alert('notified');
  }

  log(val: any){
    console.log(val);
  }

  ngOnInit(): void {
  }

}
