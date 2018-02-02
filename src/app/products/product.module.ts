import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule, routedProductsComponents } from './product.route';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';
import { ProductGuard } from './product.guard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule
    ],
    declarations: [
        routedProductsComponents,
        ConvertToSpacesPipe,
        StarComponent
    ],
    providers: [
        ProductService,
        ProductGuard
    ]
})
export class ProductModule { }
