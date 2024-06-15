import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product.service.service';
import { CartServiceService } from '../../services/cart.service.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  ListProduct: Product[] = [];
  cartItems: { product: Product, quantity: number }[] = [];
  couponCode: string = "";
  totalAmount: number = 0;

  constructor(private productService: ProductServiceService,
              private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    const cart = this.cartService.getCart();
    const productIds = Array.from(cart.keys());

    if (productIds.length > 0) {
      this.productService.getProductByIds(productIds).subscribe({
        next: (response: Product[]) => {
          this.ListProduct = response;
          this.cartItems = this.ListProduct.map(product => {
            const quantity = cart.get(product.id) || 0;
            return { product: product, quantity: quantity };
          });
          this.calculateTotalAmount();
        },
        error: (error: any) => {
          alert("Error: " + error.message);
        }
      });
    } else {
      console.error('No product IDs found in cart.');
    }
  }

  calculateTotalAmount(): void {
    this.totalAmount = 0;
    this.cartItems.forEach(item => {
      this.totalAmount += item.product.price * item.quantity;
    });
  }

  increaseProduct(id: number): void {
    this.cartService.increaseQuantity(id);
    this.updateCart();
  }

  decreaseProduct(id: number): void {
    this.cartService.decreaseQuantity(id);
    this.updateCart();
  }

  updateCart(): void {
    const cart = this.cartService.getCart();
    this.cartItems = this.cartItems.map(item => {
      const quantity = cart.get(item.product.id) || 0;
      return { product: item.product, quantity: quantity };
    });
    this.calculateTotalAmount();
  }
}
