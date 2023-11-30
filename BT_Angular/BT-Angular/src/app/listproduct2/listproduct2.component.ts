import { Component } from '@angular/core';

@Component({
  selector: 'app-listproduct2',
  templateUrl: './listproduct2.component.html',
  styleUrls: ['./listproduct2.component.css']
})
export class Listproduct2Component {
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
