import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantityInCart: number;
  quantityAvailable: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(item: CartItem) {
    const currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantityInCart += item.quantityInCart;
    } else {
      currentItems.push(item);
    }

    this.cartItemsSubject.next([...currentItems]);
  }

  removeFromCart(itemId: number, quantity: number = 1) {
    let currentItems = this.cartItemsSubject.getValue();
    const itemIndex = currentItems.findIndex(cartItem => cartItem.id === itemId);

    if (itemIndex > -1) {
      const existingItem = currentItems[itemIndex];

      if (existingItem.quantityInCart > quantity) {
        existingItem.quantityInCart -= quantity;
      } else {
        currentItems = currentItems.filter(cartItem => cartItem.id !== itemId);
      }

      this.cartItemsSubject.next([...currentItems]);
    }
  }

  getCartItemCount(): number {
    return this.cartItemsSubject.getValue().reduce((total, item) => total + item.quantityInCart, 0);
  }

  getCartTotalPrice(): number {
    return this.cartItemsSubject.getValue().reduce((total, item) => total + item.price * item.quantityInCart, 0);
  }

  getCartItems() {
    return this.cartItems$;
  }

}
