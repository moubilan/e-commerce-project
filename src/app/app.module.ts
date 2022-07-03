import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductComponent } from './product-list/single-product/single-product.component';
import { ProductFormComponent } from './product-list/product-form/product-form.component';
import { ProductsService } from './services/products.service';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { CategoriesComponent } from './layout/categories/categories.component';
import { BestSellersComponent } from './product-list/best-sellers/best-sellers.component';
import { NewArrivalsComponent } from './product-list/new-arrivals/new-arrivals.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ProductListComponent,
    SingleProductComponent,
    ProductFormComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TopbarComponent,
    CategoriesComponent,
    BestSellersComponent,
    NewArrivalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
