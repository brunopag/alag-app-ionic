import { Injectable } from '@angular/core';
// Translate Service
import { TranslateService } from '@ngx-translate/core';

/*
  Generated class for the TranslationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TranslationProvider {

  lang: string;

  constructor(private translate: TranslateService) {
    console.log('Hello TranslationProvider Provider');
    // tslint:disable-next-line:prefer-const
    this.lang = localStorage.getItem('lang');
    if ( this.lang ) {
      translate.setDefaultLang(this.lang);
    } else {
      this.lang = 'es';
      translate.setDefaultLang('es');
    }
  }

  switchLanguage(language: string) {
    console.log(language);
    this.lang = language;
    localStorage.setItem('lang', language);
    this.translate.use(language);
  }

}
