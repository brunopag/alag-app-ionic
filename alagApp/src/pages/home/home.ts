import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';
import { programa } from '../../data/programa';
import { ConferenciaDetailsPage } from '../conferencia-details/conferencia-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  items: string[];
  days:string = '0';
  program:any[] = programa.slice(0);

  constructor(public navCtrl: NavController,  
              public _translationProvider: TranslationProvider) {
    this.initializeItems();
    console.log(this.program);
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Rosario',
      'Lima',
      'Buenos Aires'
    ];
  }

  getItems(ev: any) {
    console.log(this.program);
    console.log(programa);
    this.program = [];
    this.program = programa.slice(0);
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      for (var i = 0; i < this.program[this.days].cronograma.length; i++) {
        this.program[this.days].cronograma[i].charlas = this.program[this.days].cronograma[i].charlas.filter((item) => {
          console.log(item)
          return (item.titulo_es.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
      
    }
  }

  verCharla(charla: any, programa: any) {
    this.navCtrl.push(ConferenciaDetailsPage, {'conferencia': charla, 'programa': programa});
  }

}
