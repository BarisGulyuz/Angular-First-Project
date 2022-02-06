import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories : Category[] = []
  baseUrl = "http://localhost:3000/categories"
  constructor(private htppClient : HttpClient) { }
   
  getCategories(){
     this.htppClient.get<Category[]>(this.baseUrl).subscribe(data => {
       this.categories = data
     })
  }

  getCategory(categoryId :number): Observable<Category>{
    return this.htppClient.get<Category>(this.htppClient+"/"+ categoryId)
  }

  addCategory(category : Category): Observable<Category>{
    return this.htppClient.post<Category>(this.baseUrl, category)
  }
  
}
