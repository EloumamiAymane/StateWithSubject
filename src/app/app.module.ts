import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';



import { ProductAddComponent } from './components/product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsNavbarComponent } from './components/products/products-navbar/products-navbar.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { StateComponent } from './components/state/state.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductsNavbarComponent,
    ProductsListComponent,
    ProductItemComponent,
    StateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
