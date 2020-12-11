import { ProductModel } from 'src/app/models/product-to';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  order: ProductModel[] = [];
  constructor(private readonly cartService: CartService) { }

  ngOnInit(): void {
    this.processOrder(this.cartService.placedOrder || [] as ProductModel[]);
  }

  stringify() {
    return JSON.stringify(this.order);
  }

  processOrder(order: ProductModel[]) {
    this.order = [];
    for(const product of order) {
      if(product.quantity) {
        this.order.push(product);
      }
    }
  }
}
