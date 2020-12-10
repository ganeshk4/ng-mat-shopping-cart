import { CartDialogComponent } from 'src/app/components/cart-dialog/cart-dialog.component';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel, ProductTo } from '../app/models/product-to';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  cartCount: number;
  productListResponse: ProductTo[] = [
    {
      pid: 'p1',
      pName: 'P 1 Name',
      pPrice: 250,
      pDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices purus. Sed bibendum est venenatis lorem consequat, vitae sollicitudin sapien posuere. Vestibulum commodo velit id augue lacinia, in feugiat nulla euismod. Maecenas nec est tellus. Fusce placerat mauris orci, vel rhoncus enim dignissim ultrices.',
    },
    {
      pid: 'p2',
      pName: 'P 2 Name',
      pPrice: 150,
      pDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices purus. Sed bibendum est venenatis lorem consequat, vitae sollicitudin sapien posuere. Vestibulum commodo velit id augue lacinia, in feugiat nulla euismod. Maecenas nec est tellus. Fusce placerat mauris orci, vel rhoncus enim dignissim ultrices.',
    },
    {
      pid: 'p3',
      pName: 'P 3 Name',
      pPrice: 350,
      pDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices purus. Sed bibendum est venenatis lorem consequat, vitae sollicitudin sapien posuere. Vestibulum commodo velit id augue lacinia, in feugiat nulla euismod. Maecenas nec est tellus. Fusce placerat mauris orci, vel rhoncus enim dignissim ultrices.',
    },
    {
      pid: 'p4',
      pName: 'P 4 Name',
      pPrice: 449,
      pDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices purus. Sed bibendum est venenatis lorem consequat, vitae sollicitudin sapien posuere. Vestibulum commodo velit id augue lacinia, in feugiat nulla euismod. Maecenas nec est tellus. Fusce placerat mauris orci, vel rhoncus enim dignissim ultrices.',
    },
    {
      pid: 'p5',
      pName: 'P 5 Name',
      pPrice: 500,
      pDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices purus. Sed bibendum est venenatis lorem consequat, vitae sollicitudin sapien posuere. Vestibulum commodo velit id augue lacinia, in feugiat nulla euismod. Maecenas nec est tellus. Fusce placerat mauris orci, vel rhoncus enim dignissim ultrices.',
    },
    {
      pid: 'p6',
      pName: 'P 6 Name',
      pPrice: 30.49,
      pDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices purus. Sed bibendum est venenatis lorem consequat, vitae sollicitudin sapien posuere. Vestibulum commodo velit id augue lacinia, in feugiat nulla euismod. Maecenas nec est tellus. Fusce placerat mauris orci, vel rhoncus enim dignissim ultrices.',
    }
  ]
  productList: ProductModel[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly cartService: CartService,
    public dialog: MatDialog
  ) {
    for (const product of this.productListResponse) {
      this.productList.push({quantity: 0, isInCart: false, ...product});
    }

    this.form = this.fb.group({});
    for (const product of this.productList) {
      this.form.addControl(product.pid, this.fb.control(0));
    }

    this.form.valueChanges.subscribe(() => {
      console.log(this.form.getRawValue());
    });

    this.cartService.cartUpdates.subscribe((cart: ProductModel[]) => {
      this.cartCount = cart.length;
    });
  }


  showCart() {
    const dialogRef = this.dialog.open(CartDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
