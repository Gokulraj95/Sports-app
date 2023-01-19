import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cart } from 'src/app/Shared/cart';
import { CartItem } from 'src/app/Shared/cartItem';
import { sport } from 'src/app/Shared/Sports';
@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:cart = this.getCartFromLocalStorage();
private cartSubject: BehaviorSubject<cart> = new BehaviorSubject(this.cart)
  constructor() { }

  addToCart(sport: sport): void {
    let cartItem = this.cart.items
      .find(item => item.sport.id === sport.id);
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(sport));
    this.setCartToLocalStorage();
    
  }

  removeFromCart(sportId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.sport.id != sportId);
      this.setCartToLocalStorage();
  }

  changeQuantity(sportId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.sport.id === sportId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.sport.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new cart();
  }
}
