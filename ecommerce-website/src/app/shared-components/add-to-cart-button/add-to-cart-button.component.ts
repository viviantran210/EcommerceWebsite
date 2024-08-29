import { Component, Input } from '@angular/core';
import { CartService } from '../../service/cart/cart.service';

interface Product {
  productId: number;
  productName: string;
  description: string;
  price: number;
  productQty: number;
  productImgUrl: string;
}

@Component({
  selector: 'app-add-to-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart-button.component.html',
  styleUrl: './add-to-cart-button.component.css'
})
export class AddToCartButtonComponent {
  @Input() product!: Product;
  @Input() quantity: number = 1;

  constructor(private cartService: CartService) {}

  addToCart(event: Event) {
    event.stopPropagation();
    const cartItem = {
      id: this.product.productId,
      name: this.product.productName,
      price: this.product.price,
      description: this.product.description,
      quantityInCart: this.quantity,
      quantityAvailable: this.product.productQty,
      imageUrl: this.product.productImgUrl
    };
    this.cartService.addToCart(cartItem);
  }
}
