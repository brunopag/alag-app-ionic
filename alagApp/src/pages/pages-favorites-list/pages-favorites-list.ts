import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Storage Module
import { Storage } from '@ionic/storage';
import { TranslationProvider } from '../../providers/translation/translation';
import { ConferenciaDetailsPage } from '../conferencia-details/conferencia-details';

/**
 * Generated class for the PagesFavoritesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-favorites-list',
  templateUrl: 'pages-favorites-list.html',
})
export class PagesFavoritesListPage {

  conferencias: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private storage: Storage,
              public _translationProvider: TranslationProvider) {
    this.storage.get('favoriteConferences').then((data:any[]) => {
      console.log(data);
      if(data && data.length > 0) {
        this.conferencias = data
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesFavoritesListPage');
  }

  getTituloByLang (objeto: any) {
    if (this._translationProvider.lang === 'es') {
      objeto.titulo_lang = objeto.titulo_es;
    } else if (this._translationProvider.lang === 'en') {
      objeto.titulo_lang = objeto.titulo_en;
    }
    return objeto.titulo_lang;
  }

  verCharla(charla: any, programa: any) {
    this.navCtrl.push(ConferenciaDetailsPage, {'conferencia': charla, 'programa': programa});
  }

}
