import { ProductModel } from 'src/app/models/product-to';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: ProductModel;
  constructor(
    private readonly cartService: CartService
  ) { }

  /**
   * calls cart service to check if the product exists in cart
   */
  isInCart() {
    return this.cartService.productIsInCart(this.product);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
