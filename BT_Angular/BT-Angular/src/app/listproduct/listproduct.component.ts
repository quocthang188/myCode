import { Component } from '@angular/core';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {
  products = [{"ProductID" : "P1",
              "ProductName": "Coca",
              "UnitPrice": 10000},
              {"ProductID" : "P2",
              "ProductName": "Pepsi",
              "UnitPrice": 12000},
              {"ProductID" : "P3",
              "ProductName": "Sting",
              "UnitPrice": 15000}]
}
