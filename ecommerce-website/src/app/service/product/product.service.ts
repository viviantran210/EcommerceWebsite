import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import productsFile from '../../config/product-details.json';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: any[] = [];

  constructor() {}

  setProductList() {
    this.productList = productsFile.productDetails;
  }

  getProductsByCategory(categoryName: string) {
    this.setProductList()
    return this.productList.filter((p) => p.productCategory.toLowerCase() == categoryName);
  }

  getProductById(id: number): Observable<any> {
    this.setProductList();
    const product = this.productList.find(p => p.productId === id);
    return of(product);
  }

  getProductsByCategoryAndId(category: string, id: number): Observable<any> {
    this.setProductList();
    const products = this.productList.filter(p => p.productCategory.toLowerCase() === category.toLowerCase());
    const product = products.find(p => p.productId === id);

    if (product) {
      return of(product);
    } else {
      return throwError(() => new Error('Product not found or does not match the category.'));
    }
  }

  getProductsBySearch(query: string): Observable<any> {
    this.setProductList();
    const queryWords = query.toLowerCase().split(' ');

    const filteredProducts = this.productList.filter(product =>
      queryWords.some((word: string) =>
        product.keywords.some((keyword: string) => keyword.toLowerCase().includes(word)) ||
        product.productName.toLowerCase().includes(word) ||
        product.productCategory.toLowerCase().includes(word)
      )
    );
    return of(filteredProducts);
  }
}
