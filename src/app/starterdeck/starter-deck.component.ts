import {Component, OnInit} from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  templateUrl: './starter-deck.component.html',
})

export class StarterDeckComponent implements OnInit {

    productList: any = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProductsByCategory('starter deck').subscribe(result => this.productList = result);
    }
}
