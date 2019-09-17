import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';
import { programa } from '../../data/programa';
import { ConferenciaDetailsPage } from '../conferencia-details/conferencia-details';
import { PagesFavoritesListPage } from '../pages-favorites-list/pages-favorites-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  items: string[];
  days:string = '0';
  program:any[] = [...programa];
  searchResult:any[] = [];
  textSearch = false;

  constructor(public navCtrl: NavController,  
              public _translationProvider: TranslationProvider) {
    console.log(this.program);
  }

  getItems(ev: any) {

    // set val to the value of the searchbar
    const val = ev.target.value;
    this.searchResult = [];

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.textSearch = true;
      this.program.forEach(dia => {
        dia.cronograma.forEach(horario => {
          horario.charlas.forEach(charla => {
            if(
              (this.eliminarDiacriticos(charla.titulo_es).toLowerCase().indexOf(
                this.eliminarDiacriticos(val).toLowerCase()) > -1) ||
              (this.eliminarDiacriticos(charla.titulo_en).toLowerCase().indexOf(
                this.eliminarDiacriticos(val).toLowerCase()) > -1)
            ) {
              console.log('entro al if')
              let day = this.searchResult.find(row => row.dia === dia.dia)
              if(day) {
                day.charlas.push(charla);
              } else {
                this.searchResult.push({
                  dia: dia.dia,
                  mes: dia.mes,
                  anio: dia.anio,
                  charlas: [charla]
                })
              }
            }
          })
        })
      })
      console.log(this.searchResult);
    } else { 
      this.textSearch = false;
    }
  }

  verCharla(charla: any, programa: any) {
    this.navCtrl.push(ConferenciaDetailsPage, {'conferencia': charla, 'programa': programa});
  }

  goFavorites() {
    this.navCtrl.push(PagesFavoritesListPage, {from: 'conferencias'});
  }

  getTituloByLang (objeto: any) {
    if (this._translationProvider.lang === 'es') {
      objeto.titulo_lang = objeto.titulo_es;
    } else if (this._translationProvider.lang === 'en') {
      objeto.titulo_lang = objeto.titulo_en;
    }
    return objeto.titulo_lang;
  }

  eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
  }


}
