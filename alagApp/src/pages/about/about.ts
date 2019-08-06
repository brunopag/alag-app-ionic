import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlanoAuditorioPage } from '../plano-auditorio/plano-auditorio';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  verPlano() {
    this.navCtrl.push(PlanoAuditorioPage);
  }

}
