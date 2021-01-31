import {Component, OnInit} from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  templateUrl: './boosterpack.component.html',
})

export class BoosterPackComponent implements OnInit {
    productList: any = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProductsByCategory('booster pack').subscribe(result => this.productList = result);
    }
}
