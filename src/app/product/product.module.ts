import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomtranslateService } from '../services/customtranslate.service';


export function productTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/product/', '.json');
}

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: productTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true,
    })
  ]
})
export class ProductModule { 
  constructor(private langservice: TranslateService , private customLag:CustomtranslateService) {
    this.customLag.language.subscribe(value => this.langservice.use(value));
   }
}
