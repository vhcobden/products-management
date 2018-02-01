import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductGuard } from './products/product.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductlistComponent },
    { path: 'products/:id', canActivate: [ProductGuard], component: ProductDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents =
    [HomeComponent, ProductlistComponent, ProductDetailComponent];