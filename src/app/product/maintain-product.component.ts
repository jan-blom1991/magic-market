import {Component, OnInit} from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './maintain-product.component.html'
})

export class MaintainProductComponent implements OnInit {
    product = new Product();

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
    }

}
