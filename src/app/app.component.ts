import { AfterViewInit, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CustomtranslateService } from './services/customtranslate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ecommerce';
  langChange = new FormControl('en', Validators.required);
  lang = [
    {value: 'en', viewValue: 'English'},
    {value: 'ba', viewValue: 'Bengali'},
    {value: 'hi', viewValue: 'Hindi'},
  ];
  constructor(private translate: TranslateService , private customLang:CustomtranslateService){
    this.translate.setDefaultLang('en');
    
  }
  ngAfterViewInit(): void {
    this.langChange.valueChanges.subscribe(value => {
      console.log(value);
      this.customLang.changeLang(value);
    });
  }

}
