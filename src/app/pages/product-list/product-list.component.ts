import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './intefaces/product.interface';
import { ProductService } from './services/product.service';
import { ProductDetailsService } from './services/product-details.services';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit{
  products!: Product[];
  productDetails!: Product;
  productList$ = this.details.productList$;
  constructor(private product: ProductService, private details: ProductDetailsService){

  }
  ngOnInit(): void{
    this.product.getProducts()
    .pipe(tap((products: Product[]) =>this.details.generateProductList(products)))
    .subscribe()
  }
  onClick(product: Product):void{
    this.productDetails = product
  }
}
