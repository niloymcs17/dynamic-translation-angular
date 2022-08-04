import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomtranslateService {

  language = new BehaviorSubject<string>('en');

  constructor(private translate: TranslateService) { }

  changeLang(lang: string){
    this.translate.use(lang);
    this.language.next(lang);
  }
}
