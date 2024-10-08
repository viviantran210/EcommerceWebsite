import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { CartService } from '../../service/cart/cart.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{
  searchQuery: string = '';
  cartItemCount = 0;
  private cartSub!: Subscription;

  @Input() categories: any[] = []

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartSub = this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.quantityInCart, 0);
    });
  }

  public navigateToCategory(categoryName: string) {
    this.router.navigate([categoryName.toLowerCase()]);
  }

  public onSearch(): void {
    const specialChars = /[^a-zA-Z0-9\s]/;
    if (specialChars.test(this.searchQuery)) {
    alert('Search query contains special characters. Please remove them.');
    return;
  }

  this.router.navigate(["/search"], { queryParams: { q: this.searchQuery } });
  }

  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe();
    }
  }
}
