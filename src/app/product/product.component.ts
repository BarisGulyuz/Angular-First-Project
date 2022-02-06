import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Product[] = []
  filterText: string  = ''
  constructor(public productService: ProductService, private activatedRoute:ActivatedRoute, private cartService: CartService, private toastr: ToastrService ) { }
  
  ngOnInit(): void {
    this.productService.getProducts()
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProductsByCategory(params["categoryId"])
      .subscribe(data => {
        this.products = data
      })
    })
  }

  addToCart(productName:string, price: number, quantity? : number){
    let newQuantity = 1
    if(quantity) newQuantity = quantity
    this.cartService.addToCart(productName, price, newQuantity).subscribe(data => {
      this.cartService.getCart()
      this.toastr.success(productName + " Adlı Ürün Başarıyla Sepete Eklendi", "Başarı", {
        progressBar: true,
        progressAnimation: 'decreasing' 
      })
    })
  }




 
}
