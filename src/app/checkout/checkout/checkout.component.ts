import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomtranslateService } from 'src/app/services/customtranslate.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private langservice: TranslateService , private customLag:CustomtranslateService) {
    // this.customLag.language.subscribe(value => this.langservice.use(value));
   }

  ngOnInit(): void {
  }

}
