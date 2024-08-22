import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, CurrencyPipe],
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

  public navigateToProduct(productId: number) {
    this.router.navigate([ this.categoryName.toLowerCase(), productId]);
  }
}
