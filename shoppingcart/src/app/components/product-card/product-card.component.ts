import { ProductModel } from 'src/app/models/product-to';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductCardComponent),
      multi: true
    }
  ]
})
export class ProductCardComponent implements ControlValueAccessor {

  onChange = (_: any) => {};
  @Input() product: ProductModel;
  constructor(
    private readonly cartService: CartService
  ) { }
  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  counterChanged(count) {
    this.onChange(count);
  }

  addToCart() {
    this.product.isInCart = true;
    this.cartService.addToCart(this.product);
  }
}
