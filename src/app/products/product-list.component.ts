import { Component, OnInit } from "@angular/core";

import { ProductService } from './product.service';

import { IProduct } from './product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductlistComponent implements OnInit {
    //Properties
    pageTitle: string = 'Product list';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: IProduct[];
    _listFilter: string;
    errorMessage: string;
    clickedRatingMessage: string;
    filteredProducts: IProduct[];
    isBusy: boolean = true;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    //Life hooks
    constructor(private _productService: ProductService) { }

    ngOnInit(): void {
        this._productService
            .getProducts()
            .subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
                this.isBusy = false;
            },
            error => this.errorMessage = <any>error);
    }

    //Methods
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.clickedRatingMessage = message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}