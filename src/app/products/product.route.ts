import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductlistComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuard } from './product.guard';

const routes: Routes = [
    { path: '', component: ProductlistComponent },
    { path: ':id', canActivate: [ProductGuard], component: ProductDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule { }

export const routedProductsComponents =
    [ProductlistComponent, ProductDetailComponent];