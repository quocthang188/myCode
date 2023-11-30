import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BindingPropertyComponentEx79Component } from './binding-property-component-ex79/binding-property-component-ex79.component';
import { BindingClassComponentEx80Component } from './binding-class-component-ex80/binding-class-component-ex80.component';
import { BindingStyleComponentEx81Component } from './binding-style-component-ex81/binding-style-component-ex81.component';
import { BindingEventComponentEx82Component } from './binding-event-component-ex82/binding-event-component-ex82.component';
import { BindingTwoWayComponentEx83Component } from './binding-two-way-component-ex83/binding-two-way-component-ex83.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';
import { Ptb1Component } from './ptb1/ptb1.component';
import { BindingTwoWayComponentEx84Component } from './binding-two-way-component-ex84/binding-two-way-component-ex84.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CompactComponent } from './compact/compact.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { Listproduct2Component } from './listproduct2/listproduct2.component';
import { Listproduct3Component } from './listproduct3/listproduct3.component';
import { Listproduct4Component } from './listproduct4/listproduct4.component';
import { Listproduct5Component } from './listproduct5/listproduct5.component';
import { Listproduc6Component } from './listproduc6/listproduc6.component';
import { Listproduct7Component } from './listproduct7/listproduct7.component';

import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LoginComponent } from './login/login.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import { CustomerComponent } from './customer/customer.component';
import { DongABankComponentComponent } from './dong-abank-component/dong-abank-component.component';
import { DongABankComponent } from './dong-abank/dong-abank.component';
import { FakeProductComponent } from './fake-product/fake-product.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookUpdateComponent } from './book-update/book-update.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    BindingPropertyComponentEx79Component,
    BindingClassComponentEx80Component,
    BindingStyleComponentEx81Component,
    BindingEventComponentEx82Component,
    BindingTwoWayComponentEx83Component,
    ThirdComponent,
    FourComponent,
    Ptb1Component,
    BindingTwoWayComponentEx84Component,
    SlideshowComponent,
    CompactComponent,
    ListproductComponent,
    Listproduct2Component,
    Listproduct3Component,
    Listproduct4Component,
    Listproduct5Component,
    Listproduc6Component,
    Listproduct7Component,
    RoutingComponent,
    AboutComponent,
    PagenotfoundComponent,
    TopMenuComponent,
    LeftMenuComponent,
    LoginComponent,
    ChiTietSanPhamComponent,
    CustomerComponent,
    DongABankComponentComponent,
    DongABankComponent,
    FakeProductComponent,
    BitcoinComponent,
    BooksComponent,
    BookDetailComponent,
    BookNewComponent,
    BookUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
