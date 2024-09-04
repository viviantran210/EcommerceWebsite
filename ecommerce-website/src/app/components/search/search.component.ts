import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductService } from './../../service/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AddToCartButtonComponent } from '../../shared-components/add-to-cart-button/add-to-cart-button.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    AddToCartButtonComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  searchResults$!: Observable<any>;
  private querySubscription = new Subscription();
  totalProducts: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || '';
      this.updateSearchResults(this.searchQuery);
    });
  }

  private updateSearchResults(query: string): void {
    this.searchResults$ = this.productService.getProductsBySearch(query);
    this.totalProducts = this.productService.getNumberOfProducts();
  }

  public navigateToProduct(categoryName: string, id: number) {
    this.router.navigate([categoryName.toLowerCase(), id]);
  }

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
