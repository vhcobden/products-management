import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    pageTitle: string = 'Product Detail';
    product: IProduct
    isBusy: boolean = true;
    constructor(private _activatedRoute: ActivatedRoute,
        private _productService: ProductService,
        private _router: Router) { }

    ngOnInit(): void {
        this._productService
            .getProducts()
            .subscribe(products => {
                for (let i in products) {
                    if (products[i].productId === parseInt(this._activatedRoute.snapshot.paramMap.get('id'))) {
                        this.product = products[i];
                        setTimeout(() => {
                            this.isBusy = false;
                        }, 1000);
                        return;
                    }
                }
            });
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}
