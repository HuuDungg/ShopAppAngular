import { Injectable } from '@angular/core';
import { ProductServiceService } from './product.service.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart: Map<number, number> = new Map();

  constructor(private productService: ProductServiceService) {
    
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = new Map(JSON.parse(storedCart));
    }
  }

  addToCart(productId: number, quantity: number) {
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

  clearCart(){
    this.cart.clear()
    this.saveCartToLocalStorage()
  }

  private saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(Array.from(this.cart.entries())));
  }
}
