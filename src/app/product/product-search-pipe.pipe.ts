import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productSearchPipe'
})
export class ProductSearchPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ''
    return filterText ? value.filter((p:Product) => p.name.toLocaleLowerCase().indexOf(filterText)!== -1 ) : value
  }

}
