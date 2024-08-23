import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductService } from '../../service/product.service';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { MatCardModule } from'@angular/material/card';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    CurrencyPipe
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product$!: Observable<any>;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      switchMap(params => {
        const productId = +params['id'];
        const categoryName = params['category'];
        return this.productService.getProductsByCategoryAndId(categoryName, productId).pipe(
          catchError(err => {
            // Navigate to the error page if the product is not found
            this.router.navigate(['/error']);
            // Return an empty observable
            return of(null);
          })
        );
      })
    );
  }

  incrementQuantity(maxQty: number): void {
    if (this.quantity < maxQty) {
      this.quantity++;
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
