import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomtranslateService } from 'src/app/services/customtranslate.service';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss']
})
export class PaymentCardComponent implements OnInit {

  constructor(private langservice: TranslateService , private customLag:CustomtranslateService) {
    // this.customLag.language.subscribe(value => this.langservice.use(value));
   }

  ngOnInit(): void {
  }

}
