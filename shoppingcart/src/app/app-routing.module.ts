import { ProcessOrderComponent } from 'src/app/process-order/process-order.component';
import { ProductsComponent } from 'src/app/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'process', component: ProcessOrderComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
