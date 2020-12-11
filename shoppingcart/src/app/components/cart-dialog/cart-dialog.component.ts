import { ProductModel } from 'src/app/models/product-to';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css'],
})
export class CartDialogComponent implements OnInit {
  form: FormGroup;
  total: number;
  productList: ProductModel[];
  constructor(
    private readonly router: Router,
    public dialogRef: MatDialogRef<CartDialogComponent>,
    private readonly fb: FormBuilder,
    private readonly cartService: CartService
  ) {
    this.cartService.cartUpdates.subscribe((products) => {
      this.productList = products;
      this.form = this.fb.group({});
      for (const product of this.productList) {
        this.form.addControl(product.pid, this.fb.control(product.quantity));
      }
      this.form.valueChanges.subscribe(() => {
        this.calculateTotal();
      });
      this.calculateTotal();
    });
  }

  /**
   * calculate total in the cart for first time
   */
  ngOnInit() {
    this.calculateTotal();
  }

  /**
   * calculate total by getting quantity from form and price from productList
   */
  private calculateTotal() {
    this.total = 0;
    const rawValue = this.form.getRawValue();
    for (const product of this.productList) {
      this.total += product.pPrice * rawValue[product.pid];
    }
  }

  /**
   * places order and opens another page
   */
  placeOrder() {
    const rawValue = this.form.getRawValue();
    for (const product of this.productList) {
      product.quantity = rawValue[product.pid];
    }
    this.dialogRef.close();
    this.cartService.placedOrder = this.productList;
    this.router.navigate(['/process']);
  }
}
