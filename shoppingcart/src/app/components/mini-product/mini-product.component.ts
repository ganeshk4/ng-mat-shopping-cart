import { ProductModel } from 'src/app/models/product-to';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-mini-product',
  templateUrl: './mini-product.component.html',
  styleUrls: ['./mini-product.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MiniProductComponent),
      multi: true
    }
  ]
})

export class MiniProductComponent implements ControlValueAccessor {
  onChange = (_: any) => {};
  @Input() product: ProductModel;
  constructor(
    private readonly cartService: CartService) {
  }

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

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

}
