import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routedComponents } from './app.route';

//Services
import { ProductService } from './products/product.service';

//Pipes
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

//Components
import { AppComponent } from './app.component';
import { StarComponent } from './shared/star.component';

@NgModule({
    declarations: [
        AppComponent,
        StarComponent,
        ConvertToSpacesPipe,
        routedComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        ProductService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
