import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Cart[] = []
  totalPrice: number  = 0
  constructor(private httpClient: HttpClient) { }
  baseUrl = " http://localhost:3000/cart"

  getCart() {
    this.httpClient.get<Cart[]>(this.baseUrl).subscribe(data => {
      this.cartItems = data
    })
   this.totalPrice = this.cartItems.reduce((sum:number, cart: Cart ) => sum + cart.price, 0)
  }

  addToCart(productName: string, price: number, quantity = 1): Observable<any> {
    return this.httpClient.post(this.baseUrl, { productName: productName, price: price, quantity: quantity })
  }

  removeFromCart(id : number) : Observable<any>{
    return this.httpClient.delete(this.baseUrl + "/" + id)
  }
}
