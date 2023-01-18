import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cart } from 'src/app/Shared/cart';
import { CartItem } from 'src/app/Shared/cartItem';
import { sport } from 'src/app/Shared/Sports';
@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:cart = new cart();
private cartSubject: BehaviorSubject<cart> = new BehaviorSubject(this.cart)
  constructor() { }

  addToCart(sport: sport): void {
    let cartItem = this.cart.items
      .find(item => item.sport.id === sport.id);
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(sport));
    
  }

  removeFromCart(sportId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.sport.id != sportId);
    
  }

  changeQuantity(sportId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.sport.id === sportId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.sport.price;
    
  }

  clearCart() {
    this.cart = new cart();
    
  }

  getCartObservable(): Observable<cart> {
    return this.cartSubject.asObservable();
  }

}
