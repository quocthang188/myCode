import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import {ProducthttpService} from '../producthttp.service'

@Component({
  selector: 'app-listproduct7',
  templateUrl: './listproduct7.component.html',
  styleUrls: ['./listproduct7.component.css']
})
export class Listproduct7Component {
  products:any
  constructor(private ps:ProducthttpService)
  {
    this.ps.getProducts().subscribe({
      next:(data)=>(this.products.data)
    })
  }
}
