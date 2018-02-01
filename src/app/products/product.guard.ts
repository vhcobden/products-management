import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Injectable()
export class ProductGuard implements CanActivate {
    constructor(private _router: Router, private _productService: ProductService) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        let id = +next.url[1].path;

        if (isNaN(id) || id < 1) {
            this.redirectbadRequest();
            return false;
        }

        this._productService.getProducts()
            .subscribe(products => {
                for (let i in products) {
                    if (products[i].productId === id) {
                        return true;
                    }
                }
                this.redirectbadRequest();
                return false;
            })

        return true;
    }

    redirectbadRequest(): void {
        alert('Invalid product id');
        this._router.navigate(['/products']);
    }
}