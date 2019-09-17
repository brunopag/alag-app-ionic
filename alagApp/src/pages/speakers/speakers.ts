import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { disertantes } from '../../data/disertantes';
import { SpeakersSpeakerDetailsPage } from '../speakers-speaker-details/speakers-speaker-details';


@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {

  searchQuery: string = '';
  items: string[];
  disertantes: any[] = disertantes;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakersPage');
  }

  initializeItems() {
    this.disertantes = [];
    this.disertantes = disertantes;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.disertantes = this.disertantes.filter((item) => {
        return ((this.eliminarDiacriticos(item.nombre).toLowerCase().indexOf(
          this.eliminarDiacriticos(val).toLowerCase()) > -1) ||
          this.eliminarDiacriticos(item.lugarTrabajo).toLowerCase().indexOf(
            this.eliminarDiacriticos(val).toLowerCase()) > -1);
      })
    }
  }

  eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
  }

  goSpeakerDetail(disertante) {
    this.navCtrl.push(SpeakersSpeakerDetailsPage, {'disertante': disertante});
  }

}
