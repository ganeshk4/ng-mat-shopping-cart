import { ReplaySubject } from 'rxjs';
import { ProductModel } from 'src/app/models/product-to';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  placedOrder: ProductModel[];
  private cart: ProductModel[] = [];
  cartUpdates: ReplaySubject<ProductModel[]>;

  constructor() {
    this.cartUpdates = new ReplaySubject(1);
  }

  /**
   * checks whether given product is in the cart.
   * @param product
   */
  productIsInCart(product: ProductModel): boolean {
    return this.cart.map((prod) => prod.pid).indexOf(product.pid) > -1;
  }

  /**
   * removes given product from the cart
   * @param product
   */
  removeFromCart(product: ProductModel) {
    const productIndex = this.cart.map((prod) => prod.pid).indexOf(product.pid);
    this.cart.splice(productIndex, 1);
    this.cartUpdates.next(this.cart);
  }

  /**
   * adds given product in the cart
   * @param product
   */
  addToCart(product: ProductModel) {
    product.quantity = 1;
    this.cart.push(product);
    this.cartUpdates.next(this.cart);
  }
}
