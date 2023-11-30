import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chi-tiet-san-pham',
  templateUrl: './chi-tiet-san-pham.component.html',
  styleUrls: ['./chi-tiet-san-pham.component.css']
})
export class ChiTietSanPhamComponent {
  productIdFromList = ""
  productFromList :any

  products = [{"ProductID" : "P1",
                      "ProductName": "Coca",
                      "UnitPrice": 10000},
                      {"ProductID" : "P2",
                      "ProductName": "Pepsi",
                      "UnitPrice": 12000},
                      {"ProductID" : "P3",
                      "ProductName": "Sting",
                      "UnitPrice": 15000}]

  constructor(private activeRoute: ActivatedRoute, private router: Router){
    activeRoute.paramMap.subscribe(
      (param)=>{
        let ProductID = param.get("id")
        if(ProductID != null)
        {
          this.productIdFromList = ProductID
          this.productFromList = this.products.find(p =>p.ProductID== this.productIdFromList)
        }
      }
    )
  }
}
