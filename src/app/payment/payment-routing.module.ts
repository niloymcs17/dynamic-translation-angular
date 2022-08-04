import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentCardComponent } from './payment-card/payment-card.component';

const routes: Routes = [
  {
      path:'' , component: PaymentCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
