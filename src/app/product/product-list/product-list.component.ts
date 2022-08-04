import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomtranslateService } from 'src/app/services/customtranslate.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private langservice: TranslateService , private customLag:CustomtranslateService) {
    // this.customLag.language.subscribe(value => this.langservice.use(value));
   }

  ngOnInit(): void {
  }

  
}
