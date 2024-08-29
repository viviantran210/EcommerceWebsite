import { Component, OnInit, OnDestroy } from '@angular/core';
import  { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../service/cart/cart.service'
import { Observable, Subscription } from 'rxjs';
import  { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  quantityInCart: number;
  quantityAvailable: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    MatDividerModule,
    MatCardModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy{
  cartList$!: Observable<CartItem[]>;
  numItems: number = 0;
  totalCost: number = 0;
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartList$ = this.cartService.getCartItems();
    this.cartSubscription = this.cartList$.subscribe(() => {
      this.numItems = this.cartService.getCartItemCount();
      this.totalCost = this.cartService.getCartTotalPrice();
    });
  }

  incrementQuantity(item: CartItem, maxQty: number): void {
    if (item.quantityInCart < maxQty) {
      this.cartService.addToCart(item, 1);
    }
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantityAvailable > 1) {
      this.cartService.removeFromCart(item.id);
    }
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}
