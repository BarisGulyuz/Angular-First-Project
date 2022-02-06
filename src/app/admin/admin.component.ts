import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryAddComponent } from './category-add/category-add.component';
import { ProductAddComponent } from './product-add/product-add.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private matDialog : MatDialog) { }

  ngOnInit(): void {
 
  }

  
  openCategoryModal(){
    this.matDialog.open(CategoryAddComponent, {
      width: '500px'
    })
  }

  openProductModal(){
    this.matDialog.open(ProductAddComponent, {
      width: '500px'
    })
  }
  


}
