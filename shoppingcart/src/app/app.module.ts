import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartDialogComponent } from './components/cart-dialog/cart-dialog.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartService } from './services/cart-service/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    CounterComponent,
    CartDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    NoopAnimationsModule
  ],
  providers: [
    CartService
  ],
  entryComponents: [
    CartDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
