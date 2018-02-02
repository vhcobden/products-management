import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routedComponents } from './app.route';
import { ProductModule } from './products/product.module';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        routedComponents,
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ProductModule
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
