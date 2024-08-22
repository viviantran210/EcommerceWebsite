import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: any[] = [];

  constructor() {}

  setProductList(products: any[]) {
    this.productList = products;
  }

  getProductById(id: number): Observable<any> {
    const product = this.productList.find(p => p.productId === id);
    return of(product);
  }

  getProductsByCategoryAndId(category: string, id: number): Observable<any> {
    const products = this.productList.filter(p => p.productCategory.toLowerCase() === category.toLowerCase());
    const product = products.find(p => p.productId === id);

    if (product) {
      return of(product);
    } else {
      return throwError(() => new Error('Product not found or does not match the category.'));
    }
  }
}
