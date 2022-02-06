import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(public productService : ProductService, private formBuilder: FormBuilder, private dialogRef : MatDialogRef<ProductAddComponent>, private toastr : ToastrService, public categoryService : CategoryService) { }

  productForm! : FormGroup

  ngOnInit(): void {
    this.categoryService.getCategories()
    this.productForm = this.formBuilder.group({
      name : ['', Validators.required],
      categoryId : ['', Validators.required],
      description : ['', Validators.required],
      imageUrl : ['', Validators.required],
      stock : ['', Validators.required],
      price : ['', Validators.required],
    })
  }

  addProduct(){
    this.productService.addProduct(this.productForm.value).subscribe(res => {
      this.productService.getProducts()
      this.toastr.success(res.name + " Adlı Ürün Başarıyla Eklendi")
      this.dialogRef.close(true)
    })
  }



}
