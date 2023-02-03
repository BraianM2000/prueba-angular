import { Component, Input,ChangeDetectionStrategy } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from '../intefaces/product.interface';
import { ProductDetailsService } from '../services/product-details.services';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input()
  product!: Product
  
  constructor(private productDetails: ProductDetailsService, private productService: ProductService){

  }

  addProduct(product: Product):void{

    this.productDetails.addProduct(product);
    this.productService.updateProduct(product.id, product.stock).subscribe()

  }

  subtractProduct(product: Product):void{
    this.productDetails.subtractProducts(product);
    this.productService.updateProduct(product.id, product.stock).subscribe()
  }

 
}
