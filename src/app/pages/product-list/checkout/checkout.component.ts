import { Component } from '@angular/core';
import { ProductDetailsService } from '../services/product-details.services';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  {
  total$ = this.orderDetails.total$
  order$ = this.orderDetails.add$;
  
  constructor(private orderDetails: ProductDetailsService){}


}
