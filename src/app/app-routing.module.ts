import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'product' , loadChildren:() => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'checkout' , loadChildren:() => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'payment' , loadChildren:() => import('./payment/payment.module').then(m => m.PaymentModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
