import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppComponent } from './components/main-app/main-app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { ComfirmOrderComponent } from './components/comfirm-order/comfirm-order.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"signUp", component: SignUpComponent},
  {path:"order", component: OrderComponent},
  {path:"orderConfirm", component: ComfirmOrderComponent},
  {path:"checkout", component: CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
