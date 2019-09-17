import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanoAuditorioPage } from '../plano-auditorio/plano-auditorio';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-info-centro-convencion',
  templateUrl: 'info-centro-convencion.html',
})
export class InfoCentroConvencionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoCentroConvencionPage');
  }

  verPlano() {
    this.navCtrl.push(PlanoAuditorioPage);
  }

  navegarPaginaWeb(url: string) {
    this.iab.create(url, '_system');
  }

}
