import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { ProductCreateComponent } from './core/product/product-create/product-create.component';
import { ProductDetailComponent } from './core/product/product-detail/product-detail.component';
import { ProductEditComponent } from './core/product/product-edit/product-edit.component';
import { ProductListComponent } from './core/product/product-list/product-list.component';
import { RequestCreateComponent } from './core/request/request-create/request-create.component';
import { RequestDetailComponent } from './core/request/request-detail/request-detail.component';
import { RequestEditComponent } from './core/request/request-edit/request-edit.component';
import { RequestLinesComponent } from './core/request/request-lines/request-lines.component';
import { RequestListComponent } from './core/request/request-list/request-list.component';
import { RequestReviewItemComponent } from './core/request/request-review-item/request-review-item.component';
import { RequestReviewListComponent } from './core/request/request-review-list/request-review-list.component';
import { RequestlineCreateComponent } from './core/requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './core/requestline/requestline-edit/requestline-edit.component';
import { UserCreateComponent } from './core/user/user-create/user-create.component';
import { UserDetailComponent } from './core/user/user-detail/user-detail.component';
import { UserEditComponent } from './core/user/user-edit/user-edit.component';
import { UserListComponent } from './core/user/user-list/user-list.component';
import { UserLoginComponent } from './core/user/user-login/user-login.component';
import { VendorCreateComponent } from './core/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './core/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './core/vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './core/vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent},

  { path: "user/list", component: UserListComponent},
  { path: "user/detail/:id", component: UserDetailComponent},
  { path: "user/create", component: UserCreateComponent},
  { path: "user/edit/:id", component: UserEditComponent},
  { path: "user/login", component: UserLoginComponent},

  { path: "vendor/list", component: VendorListComponent},
  { path: "vendor/detail/:id", component: VendorDetailComponent},
  { path: "vendor/create", component: VendorCreateComponent},
  { path: "vendor/edit/:id", component: VendorEditComponent},

  { path: "product/list", component: ProductListComponent},
  { path: "product/detail/:id", component: ProductDetailComponent},
  { path: "product/create", component: ProductCreateComponent},
  { path: "product/edit/:id", component: ProductEditComponent},

  { path: "request/list", component: RequestListComponent},
  { path: "request/detail/:id", component: RequestDetailComponent},
  { path: "request/create", component: RequestCreateComponent},
  { path: "request/edit/:id", component: RequestEditComponent},
  { path: "request/lines/:id", component: RequestLinesComponent},
  { path: "request/reviews", component: RequestReviewListComponent},
  { path: "request/review/:id", component: RequestReviewItemComponent},

  { path: "requestline/create/:id", component: RequestlineCreateComponent},
  { path: "requestline/edit/:id", component: RequestlineEditComponent },
  



  { path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
