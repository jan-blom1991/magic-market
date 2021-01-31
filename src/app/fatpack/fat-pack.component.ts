import {Component, OnInit} from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  templateUrl: './fat-pack.component.html',
})

export class FatPackComponent implements OnInit {

    productList: any = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProductsByCategory('fat pack').subscribe(result => this.productList = result);
    }
}
