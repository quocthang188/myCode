import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getListProduct()
  {
    let products = [{"ProductID" : "P1",
                      "ProductName": "Coca",
                      "UnitPrice": 10000},
                      {"ProductID" : "P2",
                      "ProductName": "Pepsi",
                      "UnitPrice": 12000},
                      {"ProductID" : "P3",
                      "ProductName": "Sting",
                      "UnitPrice": 15000}]
    return products
  } 
  searchProduct(min:number, max:number)
  {
    let products= this.getListProduct()
    let filter = products.filter(p =>p.UnitPrice >= min && p.UnitPrice <= max)
    return filter
  }
}
