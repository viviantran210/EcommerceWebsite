import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: {
    productName: string,
    productId: number,
    productCategory: string,
    productImgUrl: string,
    productDesc: string,
    price: number
  } | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];;
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
      });
    });
  }
}
