import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getCookie, setCookie } from 'typescript-cookie';

interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
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

  constructor() {
    this.loadCartFromCookies();
  }

  addToCart(item: CartItem, quantityToAdd: number = 1) {
    const currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantityInCart += quantityToAdd;
    } else {
      item.quantityInCart = quantityToAdd;
      currentItems.push(item);
    }

    this.cartItemsSubject.next([...currentItems]);
    this.saveCartToCookies();
  }

  removeFromCart(itemId: number, quantity: number = 1) {
    let currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find(cartItem => cartItem.id === itemId);

    if (existingItem) {
      if (existingItem.quantityInCart > quantity) {
        existingItem.quantityInCart -= quantity;
      } else {
        currentItems = currentItems.filter(cartItem => cartItem.id !== itemId);
      }

      this.cartItemsSubject.next([...currentItems]);
      this.saveCartToCookies();
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

  getCartAsJson(): string {
    return JSON.stringify(this.cartItemsSubject.getValue(), null, 2);
  }

  private saveCartToCookies() {
    const cartJson = JSON.stringify(this.cartItemsSubject.getValue(), null, 2);
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    setCookie('cart', cartJson, { expires: expirationDate });
  }

  private loadCartFromCookies() {
    const cartJson = getCookie('cart');
    if (cartJson) {
      const cartItems: CartItem[] = JSON.parse(cartJson);
      this.cartItemsSubject.next(cartItems);
    }
  }

}
