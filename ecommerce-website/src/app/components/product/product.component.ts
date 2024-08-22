import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import productsFile from '../../config/products.json';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() categoryName!: string;
  productList: any[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe({
      next: (url) => {
        this.productList = productsFile.products.filter((items: any) => url[0].path === items.productCategory.toLowerCase());
        this.productService.setProductList(this.productList);
      }
    })
  }

  public navigateToProduct(productId: number) {
    this.router.navigate([ this.categoryName.toLowerCase(), productId]);
  }
}
