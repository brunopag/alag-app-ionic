import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Storage Module
import { Storage } from '@ionic/storage';
import { TranslationProvider } from '../../providers/translation/translation';
import { ConferenciaDetailsPage } from '../conferencia-details/conferencia-details';
import { TrabajoDetailsPage } from '../trabajo-details/trabajo-details';

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
  trabajos: any[] = [];
  lista = '0';

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
    this.storage.get('favoriteTrabajos').then((data:any[]) => {
      console.log(data);
      if(data && data.length > 0) {
        this.trabajos = data
      }
    });
    let from = this.navParams.get('from');
    if(from === 'conferencias'){
      this.lista = '0'
    } else {
      this.lista = '1'
    }
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

  inicialesNombres(nombres: string) {
    let iniciales: string = '';
    let arrayNombres: any[] = nombres.split(' ');
    for (let nombre of arrayNombres) {
      iniciales = iniciales + nombre.substr(0, 1) + '.';
    }
    return iniciales.toUpperCase();
  }

  verTrabajo(trabajo: any) {
    this.navCtrl.push(TrabajoDetailsPage, { 'trabajo': trabajo });
  }

}
