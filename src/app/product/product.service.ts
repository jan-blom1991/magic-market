import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './product';


@Injectable()
export class ProductService {

    private messageSource = new BehaviorSubject<Product>(null);
    currentMessage = this.messageSource.asObservable();

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:8082/products');
    }

    addProduct(product: Product): Observable<number> {
        return this.http.post<number>('http://localhost:8082/products', product);
    }

    editProduct(product: Product): Observable<void> {
        return this.http.put<void>('http://localhost:8082/products', product);
    }

    removeProduct(id: number): Observable<void> {
        return this.http.delete<void>(`http://localhost:8082/api/removeproduct/${id}`);
    }

    getProductsByCategory(category: string): Observable<Product[]> {
      return this.http.get<Product[]>(`http://localhost:8082/products/?category=${category}`);
    }
}
