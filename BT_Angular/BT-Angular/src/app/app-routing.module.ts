import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ptb1Component } from './ptb1/ptb1.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { LoginComponent } from './login/login.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import { Customer } from './customer';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  // {path:"", redirectTo: "/about", pathMatch:"full"}, //set main page (for example: login)
  {path:"ptb1", component: Ptb1Component},
  {path: "slide", component:SlideshowComponent},
  {path:"about", component: AboutComponent},
  {path:"listProduct", component: ListproductComponent},
  {path:"listProduct/:id", component: ChiTietSanPhamComponent},
  {path:"login", component: LoginComponent},

  //customer
  {path:"customer", component:CustomerComponent},

  {path: "**", component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [Ptb1Component, SlideshowComponent, AboutComponent, PagenotfoundComponent, ListproductComponent, LoginComponent, ChiTietSanPhamComponent]