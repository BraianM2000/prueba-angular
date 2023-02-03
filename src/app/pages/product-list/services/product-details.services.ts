import {Injectable} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from '../intefaces/product.interface';

@Injectable({
    providedIn: 'root'
})

export class ProductDetailsService{
    products: Product[] = [];
    productList: Product[] = [];

    private addSubject = new Subject<Product[]>();
    private totalSubject = new Subject<number>();
    private quntitySubject = new Subject<number>();
    private listSubject = new Subject<Product[]>();

    get add$(): Observable<Product[]>{
        return this.addSubject.asObservable();
    }

    get total$(): Observable<number>{
        return this.totalSubject.asObservable();
    }
    get stock$(): Observable<number>{
        return this.quntitySubject.asObservable();
    }

    get productList$(): Observable<Product[]>{
        return this.listSubject.asObservable();
    }

    addProduct(product: Product):void{
        this.add(product);
        this.productQuantity();
        this.totalValue();
        this.subtractStock(product)
    }

    subtractProducts(product:Product): void{
        this.substract(product)
        this.productQuantity();
        this.totalValue();
        this.addStock(product)
    }


      generateProductList  (products: Product[]):void{
        products.forEach(product => this.productList.push({...product, quantity:0}))
        this.listSubject.next(this.productList)
    }

    private  add (product: Product):void{
        const addedProduct = this.products.find(({id})=> id == product.id)
        const updateProduct = this.productList.find(({id})=> id == product.id)

        if(addedProduct && updateProduct){
            addedProduct.quantity += 1;
            updateProduct.quantity += 1
            
        }else if(!addedProduct && updateProduct){
            updateProduct.quantity += 1
            this.products.push({...product, quantity:1});
            this.addSubject.next(this.products);
            
        }
        
    }

    private  substract (product: Product):void{
        const addedProduct = this.products.find(({id})=> id == product.id)
        if(addedProduct && addedProduct.quantity>1){
            addedProduct.quantity -= 1;
            
        }else  {
            this.products = this.products.filter((item)=>item.id != product.id);
            this.addSubject.next(this.products);
        }
    }

    private addStock (product: Product):void{
        const productTosubtract = this.productList.find(({id})=> id===product.id)
        const updateProduct = this.productList.find(({id})=> id == product.id)
        if(productTosubtract && updateProduct){
            productTosubtract.stock+=1
            updateProduct.quantity -=1
        }
    }

    private subtractStock (product: Product):void{
        const productTosubtract = this.productList.find(({id})=> id===product.id)
        if(productTosubtract){
            productTosubtract.stock-=1
        }
    }

    private productQuantity():void{
        const quantity = this.products.reduce((total, producto) => total +=  producto.quantity, 0 )
        this.quntitySubject.next(quantity);
    }

    private totalValue(): void{
        const total = this.products.reduce((total, producto) => total += (producto.price * producto.quantity), 0 )
        this.totalSubject.next(total);
    }

}