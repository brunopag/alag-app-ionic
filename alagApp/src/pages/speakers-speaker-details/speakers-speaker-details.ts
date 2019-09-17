import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-speakers-speaker-details',
  templateUrl: 'speakers-speaker-details.html',
})
export class SpeakersSpeakerDetailsPage {

  disertante: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.disertante = this.navParams.get('disertante');
    console.log('disertante', this.disertante);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakersSpeakerDetailsPage');
  }

}
