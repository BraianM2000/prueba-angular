import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import{Product} from "../intefaces/product.interface"
@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private apiURL='http://localhost:3000/products'
    constructor(private http: HttpClient){}

    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.apiURL);
    }

    updateProduct(id: number, quantity: number):Observable<any>{
        const data = {"stock": quantity}
        return this.http.patch(`${this.apiURL}/${id}`, data)
    }

}