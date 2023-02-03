import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { MaterialModule } from 'src/app/material.module';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MaterialModule,
  ]
})
export class ProductListModule { }
