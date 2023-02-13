import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_share/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product> {
    return this.http
      .get<Product>(this.url);
  }
}
