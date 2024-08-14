import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() categoryName!: string;
  productList$!:  Observable<any[]>;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productList$ = this.productService.getProductsByCategory(this.categoryName);
  }

  public navigateToProduct(product: any) {
    console.log('Navigating to product:', product.productName);
    this.router.navigate([ this.categoryName.toLowerCase(), product.productId]);
  }
}
