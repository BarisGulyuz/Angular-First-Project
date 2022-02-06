import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService, private toastr : ToastrService) { }
  totalCount : number = 0
  ngOnInit(): void {
    this.cartService.getCart()
  }

  remove(id : number){
    this.cartService.removeFromCart(id).subscribe(res=> {
      this.cartService.getCart()
      this.toastr.error("Ürün Sepetten Kaldırıldı", "Silindi!",{
        progressBar: true,
        progressAnimation: 'increasing'
      })
    })
  }

}
