import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import productsFile from '../../config/products.json';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() categoryName!: string;
  productList: any[] = [];
  private routeSubscription: Subscription = new Subscription();

  constructor(
    private productService: ProductService,
    private router: Router,
    private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.url.subscribe({
      next: (url) => {
        this.productList = productsFile.products.filter((items: any) => url[0].path === items.productCategory.toLowerCase());
        this.productService.setProductList(this.productList);
      }
    })
  }

  public navigateToProduct(productId: number) {
    this.router.navigate([ this.categoryName.toLowerCase(), productId]);
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
