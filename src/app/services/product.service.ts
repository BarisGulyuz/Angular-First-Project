import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : Product[] = []
  baseUrl = "http://localhost:3000/products"

  constructor(private httpClient:HttpClient) { }

  getProducts(){
    this.httpClient.get<Product[]>(this.baseUrl).subscribe(data => {
      this.products = data
    })
  }
  getProductsByCategory(categoryId :number) : Observable<Product[]> {
    if(categoryId){
      return this.httpClient.get<Product[]>(this.baseUrl+"?categoryId="+ categoryId)
    }
    return this.httpClient.get<Product[]>(this.baseUrl)
  }

  addProduct(prodcut : Product) : Observable<Product>{
    return this.httpClient.post<Product>(this.baseUrl, prodcut)
  }
  
}
