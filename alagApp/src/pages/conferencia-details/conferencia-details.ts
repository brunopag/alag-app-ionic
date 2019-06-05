import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';

@IonicPage()
@Component({
  selector: 'page-conferencia-details',
  templateUrl: 'conferencia-details.html',
})
export class ConferenciaDetailsPage {

  conferencia: any;
  programa: any;
  fechaConferencia: Date = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams, public _translationProvider: TranslationProvider) {
    this.conferencia = this.navParams.get('conferencia');
    this.programa = this.navParams.get('programa');
    this.fechaConferencia.setFullYear(
      this.programa.anio,
      this.programa.mes - 1,
      this.programa.dia
    );
    console.log(this.conferencia);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConferenciaDetailsPage');
  }

  getTituloByLang (objeto: any) {
    if (this._translationProvider.lang === 'es') {
      objeto.titulo_lang = objeto.titulo_es;
    } else if (this._translationProvider.lang === 'en') {
      objeto.titulo_lang = objeto.titulo_en;
    }
    return objeto.titulo_lang;
  }

}
