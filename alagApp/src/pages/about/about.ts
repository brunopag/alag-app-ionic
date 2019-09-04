import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoCentroConvencionPage } from '../info-centro-convencion/info-centro-convencion';
import { InfoPatrocinadoresPage } from '../info-patrocinadores/info-patrocinadores';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {}

  goCentroConvencion() {
    this.navCtrl.push(InfoCentroConvencionPage);
  }

  goPatrocinadores() {
    this.navCtrl.push(InfoPatrocinadoresPage);
  }

  navegarPaginaWeb(url: string) {
    this.iab.create(url, '_system');
  }

}
