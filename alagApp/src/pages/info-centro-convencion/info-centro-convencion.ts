import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanoAuditorioPage } from '../plano-auditorio/plano-auditorio';

/**
 * Generated class for the InfoCentroConvencionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-centro-convencion',
  templateUrl: 'info-centro-convencion.html',
})
export class InfoCentroConvencionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoCentroConvencionPage');
  }

  verPlano() {
    this.navCtrl.push(PlanoAuditorioPage);
  }

}
