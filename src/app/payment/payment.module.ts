import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentCardComponent } from './payment-card/payment-card.component';
import { CustomtranslateService } from '../services/customtranslate.service';

export function paymentTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/payment/', '.json');
}

@NgModule({
  declarations: [
    PaymentCardComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: paymentTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true,
    })
  ]
})
export class PaymentModule { 
  constructor(private langservice: TranslateService , private customLag:CustomtranslateService) {
    this.customLag.language.subscribe(value => this.langservice.use(value));
   }
}
