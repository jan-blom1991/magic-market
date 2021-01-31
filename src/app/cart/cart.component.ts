import {Component, OnInit} from '@angular/core';
import { CartItem } from './cartItem';
import { CartService } from './cart.service';

@Component({
  templateUrl: './cart.component.html',
})

export class CartComponent implements OnInit {
    cartItem = new CartItem();
    cartItemList: any = [];

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cartService.getCartItemList().subscribe(
            response => {
                this.cartItemList = response;
            });
    }

    removeCartItem(i): void {
        this.cartService.removeCartItem(this.cartItemList[i].id).subscribe(() => this.ngOnInit());
    }
}
