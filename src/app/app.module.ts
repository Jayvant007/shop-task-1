import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-list/product-details/product-details.component';
import { ProductShoppingComponent } from './product/product-shopping/product-shopping.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

// import { ProductShoppingDeatilsComponent } from './productShopping/product-shopping-deatils/product-shopping-deatils.component';
// import { ProductShoppingDetailsComponent } from './product/product-shopping/product-shopping-details/product-shopping-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddProductFormComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductShoppingComponent,
    // ProductShoppingDeatilsComponent,
    // ProductShoppingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
