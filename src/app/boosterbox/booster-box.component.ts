import {Component, OnInit} from '@angular/core';
import { ProductService } from '../product/product.service';


@Component({
  templateUrl: './booster-box.component.html',
})

export class BoosterBoxComponent implements OnInit {
    productList: any = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProductsByCategory('booster box').subscribe(result => this.productList = result);
    }
}
