import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../service/product/product.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  categories: any[] = []

  constructor(
    private productService: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    console.log(this.categories);
  }

  public navigateToCategory(categoryName: string) {
    this.router.navigate([categoryName.toLowerCase()]);
  }

  public goToShop() {
    this.navigateToCategory("all");
  }
}
