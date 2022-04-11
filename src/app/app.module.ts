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
import { RequestDetailComponent } from './core/request/request-detail/request-detail.component';
import { RequestListComponent } from './core/request/request-list/request-list.component';
import { RequestCreateComponent } from './core/request/request-create/request-create.component';
import { RequestEditComponent } from './core/request/request-edit/request-edit.component';
import { RequestLinesComponent } from './core/request/request-lines/request-lines.component';

import { RequestlineCreateComponent } from './core/requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './core/requestline/requestline-edit/requestline-edit.component';
import { RequestReviewListComponent } from './core/request/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './core/request/request-review-item/request-review-item.component';


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
    RequestDetailComponent,
    RequestListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestLinesComponent,

    RequestlineCreateComponent,
    RequestlineEditComponent,
    RequestReviewListComponent,
    RequestReviewItemComponent,
   
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
