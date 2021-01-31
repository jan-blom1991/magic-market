import {Component, OnInit} from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
    templateUrl: './manage-products.component.html'
})

export class ManageProductsComponent implements OnInit {
    productList: any[] = [];
    product = new Product();
    url: string | ArrayBuffer = '';
    productId: number;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts().subscribe(data => this.productList = data);
    }

    onFileSelected(event: any): void {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = (readerEvent) => {
                this.url = readerEvent.target.result;
            };

            this.product.image = file;
        }
    }

    addProduct(): void {
        this.productService.addProduct(this.product).subscribe(
            response => {
                this.productId = response;
            });
    }

    removeProduct(i): void {
        this.productService.removeProduct(this.productList[i].id).subscribe(() => this.ngOnInit());
    }

    editProduct(): void {
        this.productService.editProduct(this.product).subscribe(() => this.ngOnInit());
    }

    editProductValues(i): void {
        this.product.id = this.productList[i].id;
        this.product.name = this.productList[i].name;
        this.product.category = this.productList[i].category;
        this.product.description = this.productList[i].description;
        this.product.stock = this.productList[i].stock;
        this.product.price = this.productList[i].price;
    }
}
