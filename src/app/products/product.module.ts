import { NgModule } from '@angular/core';
import { ProductRoutingModule, routedProductsComponents } from './product.route';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductService } from './product.service';
import { ProductGuard } from './product.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ProductRoutingModule
    ],
    declarations: [
        routedProductsComponents,
        ConvertToSpacesPipe
    ],
    providers: [
        ProductService,
        ProductGuard
    ]
})
export class ProductModule { }
