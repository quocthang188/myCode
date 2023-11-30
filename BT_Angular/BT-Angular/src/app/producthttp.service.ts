import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProducthttpService {
  private url: string='./assets/datasets/products.json'

  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url)
    
  }
}
