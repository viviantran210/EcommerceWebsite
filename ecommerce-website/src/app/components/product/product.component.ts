import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product/product.service';
import { Subscription } from 'rxjs';
import { AddToCartButtonComponent } from './../../shared-components/add-to-cart-button/add-to-cart-button.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    CurrencyPipe,
    AddToCartButtonComponent
  ],
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
        this.productList = this.productService.getProductsByCategory(url[0].path);
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
