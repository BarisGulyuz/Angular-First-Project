import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', redirectTo : 'home', pathMatch:'full'},
  {path: 'products', component:ProductComponent},
  {path: 'home', component:ProductComponent},
  {path: 'product/category/:categoryId', component : ProductComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
