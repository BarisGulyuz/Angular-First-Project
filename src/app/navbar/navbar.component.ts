import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartValue: boolean = true
  
  constructor(private dialog: MatDialog, public cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.getCart()
  }
  

  setCartValueTrue() {
    this.cartValue = true
  }
  setCartValueFalse() {
    this.cartValue = false
  }

  openCart() {
    this.dialog.open(CartComponent, {
      width: '500px'
    })
  }

}
