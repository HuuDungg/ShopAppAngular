import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainAppComponent } from './components/main-app/main-app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { OrderComponent } from './components/order/order.component';
import { ComfirmOrderComponent } from './components/comfirm-order/comfirm-order.component';
import { Router, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainAppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    DetailProductComponent,
    OrderComponent,
    ComfirmOrderComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainAppComponent]
})
export class AppModule { }
