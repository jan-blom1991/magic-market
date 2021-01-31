import {Component, OnInit} from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './view-product.component.html'
})

export class ViewProductComponent implements OnInit {
    product = new Product();

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.currentMessage.subscribe(message => this.product = message);
        console.log(this.product);
    }

}

