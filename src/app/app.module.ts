import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu/menu.component';
import { UserListComponent } from './core/user/user-list/user-list.component';
import { UserDetailComponent } from './core/user/user-detail/user-detail.component';
import { UserCreateComponent } from './core/user/user-create/user-create.component';
import { UserEditComponent } from './core/user/user-edit/user-edit.component';
import { UserLoginComponent } from './core/user/user-login/user-login.component';
import { VendorListComponent } from './core/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './core/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './core/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './core/vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './core/product/product-list/product-list.component';
import { ProductDetailComponent } from './core/product/product-detail/product-detail.component';
import { ProductCreateComponent } from './core/product/product-create/product-create.component';
import { ProductEditComponent } from './core/product/product-edit/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
   
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
