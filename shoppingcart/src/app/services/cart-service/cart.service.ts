import { Observable, Subject } from 'rxjs';
import { ProductModel } from 'src/app/models/product-to';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: ProductModel[] = [];
  cartUpdates: Subject<ProductModel[]>;

  constructor() {
    this.cartUpdates = new Subject();
  }

  addToCart(product: ProductModel) {
    product.quantity = 1;
    this.cart.push(product);
    this.cartUpdates.next(this.cart);
  }
}
