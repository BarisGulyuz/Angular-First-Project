import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(public categoryService : CategoryService, private formBuilder : FormBuilder, private dialogRef : MatDialogRef<CategoryAddComponent>, private toastr: ToastrService) { }
  categoryForm! : FormGroup

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  addCategory(){
    this.categoryService.addCategory(this.categoryForm.value).subscribe(res => {
        this.categoryService.getCategories()
        this.toastr.success(res.name + " Başarıyla Eklendi")
        this.dialogRef.close(true)
    })
  }

}
