import { Injectable } from '@angular/core';
import { ProductServiceService } from './product.service.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart: Map<number, number> = new Map(); // Dùng Map để lưu trữ giỏ hàng, key là id sản phẩm, value là số lượng

  constructor(private productService: ProductServiceService) {
    this.cart = new Map<number, number>();

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        // Parse storedCart into a valid cartObject
        const cartObject = JSON.parse(storedCart) as { [key: string]: number };
        // Ensure cartObject is a valid object
        if (typeof cartObject === 'object' && cartObject !== null) {
          // Iterate over cartObject and populate this.cart
          Object.entries(cartObject).forEach(([key, value]) => {
            this.cart.set(Number(key), value);
          });
        } else {
          console.error('Stored cart data is not in expected format:', storedCart);
        }
      } catch (error) {
        console.error('Error parsing stored cart data:', error);
      }
    } else {
      console.warn('No cart data found in localStorage.');
    }
  }

  addToCart(productId: number, quantity: number = 1): void {
    if (this.cart.has(productId)) {
      this.cart.set(productId, this.cart.get(productId)! + quantity);
    } else {
      this.cart.set(productId, quantity);
    }
    this.saveCartToLocalStorage();
  }

  getCart(): Map<number, number> {
    return this.cart;
  }

  private saveCartToLocalStorage(): void {
    const cartObject = Object.fromEntries(this.cart);
    localStorage.setItem('cart', JSON.stringify(cartObject));
  }

  clearCart(): void {
    this.cart.clear();
    this.saveCartToLocalStorage();
  }

  increaseQuantity(productId: number, increaseBy: number = 1): void {
    if (this.cart.has(productId)) {
      this.cart.set(productId, this.cart.get(productId)! + increaseBy);
      this.saveCartToLocalStorage();
    }
  }

  decreaseQuantity(productId: number, decreaseBy: number = 1): void {
    if (this.cart.has(productId)) {
      const currentQuantity = this.cart.get(productId)!;
      if (currentQuantity - decreaseBy <= 0) {
        this.cart.delete(productId);
      } else {
        this.cart.set(productId, currentQuantity - decreaseBy);
      }
      this.saveCartToLocalStorage();
    }
  }
}
