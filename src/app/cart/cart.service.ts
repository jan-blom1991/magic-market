import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from './cartItem';
import { Observable } from 'rxjs';


@Injectable()
export class CartService {

    constructor(private http: HttpClient) {}

    getCartItemList(): Observable<CartItem[]> {
        return this.http.get<CartItem[]>('http://localhost:8082/api/cartitemlist');
    }

    removeCartItem(id: number): Observable<void> {
        return this.http.delete<void>(`http://localhost:8082/api/removecartitem/${id}`);
    }
}
