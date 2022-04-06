import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { ProductDetailComponent } from './core/product/product-detail/product-detail.component';
import { ProductListComponent } from './core/product/product-list/product-list.component';
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

  

  { path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
