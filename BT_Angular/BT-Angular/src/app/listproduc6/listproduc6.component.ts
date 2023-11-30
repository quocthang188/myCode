import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listproduc6',
  templateUrl: './listproduc6.component.html',
  styleUrls: ['./listproduc6.component.css']
})
export class Listproduc6Component {
  filterProducts: any=null
  constructor(private ps: ProductService)
  {
    
  }
  searchProduct(min:string, max:string)
  {
    let v1 = parseInt(min)
    let v2 = parseInt(max)
    this.filterProducts =this.ps.searchProduct(v1,v2)
  }
}
