import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomtranslateService } from '../services/customtranslate.service';
export function checkoutTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/checkout/', '.json');
}

@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: checkoutTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true,
    })
  ]
})
export class CheckoutModule {
  constructor(private langservice: TranslateService , private customLag:CustomtranslateService) {
    this.customLag.language.subscribe(value => this.langservice.use(value));
   }
 }
