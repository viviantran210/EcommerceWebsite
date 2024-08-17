import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../service/product.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatCardModule } from'@angular/material/card';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product$!: Observable<any>;

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
        return this.productService.getProductById(productId).pipe(
          switchMap(product => {
            // Check if the product exists and if it belongs to the correct category
            if (!product || product.productCategory.toLowerCase() !== categoryName.toLowerCase()) {
              this.router.navigate(['/error']);
              return [];
            }
            return [product];
          })
        );
      })
    );
  }
}
