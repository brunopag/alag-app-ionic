import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';

// Storage Module
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-conferencia-details',
  templateUrl: 'conferencia-details.html',
})
export class ConferenciaDetailsPage {

  conferencia: any;
  programa: any;
  fechaConferencia: Date = new Date();
  isFavorite: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public _translationProvider: TranslationProvider,
              private storage: Storage,
              public toastCtrl: ToastController) {
    this.conferencia = this.navParams.get('conferencia');
    this.programa = this.navParams.get('programa');
    this.fechaConferencia.setFullYear(
      this.programa.anio,
      this.programa.mes - 1,
      this.programa.dia
    );
    console.log(this.conferencia);
    this.storage.get('favoriteConferences').then((data:any[]) => {
      console.log(data);
      if(data !== null) {
        let conferencieInFavorites = data.find(row => row.conferencia.id === this.conferencia.id);
        if(conferencieInFavorites) {
          this.isFavorite = true;
        }
      }
    });
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

  getDescByLang (objeto: any) {
    if (this._translationProvider.lang === 'es') {
      objeto.desc_lang = objeto.desc_es;
    } else if (this._translationProvider.lang === 'en') {
      objeto.desc_lang = objeto.desc_en;
    }
    return objeto.desc_lang;
  }

  agregarFavorito(){
    if(!this.isFavorite) {
      this.storage.get('favoriteConferences').then((data:any[]) => {
        console.log(data);
        if(data === null) {
          let favoriteConferences = [];
          favoriteConferences.push({conferencia: this.conferencia, programa: this.programa});
          this.storage.set('favoriteConferences', favoriteConferences).then(() => {
            console.log('notifications updated');
            this.isFavorite = true;
          });
        } else {
          data.push({conferencia: this.conferencia, programa: this.programa});
          this.storage.set('favoriteConferences', data).then(() => {
            console.log('notifications updated');
            this.isFavorite = true;
          });
        }
        let message: string;
        if(this._translationProvider.lang === 'es') {
          message = 'Agregado correctamente a Favoritos.';
        } else {
          message = 'Successfully added to Favorites.';
        }
        const toast = this.toastCtrl.create({
          message: message,
          duration: 2000
        });
        toast.present();
      });
    } else {
      this.storage.get('favoriteConferences').then((data:any[]) => {
        console.log(data);
        if(data !== null) {
          let indexFavorite = data.findIndex(row => row.conferencia.id === this.conferencia.id);
          if(indexFavorite !== -1) {
            data.splice(indexFavorite, 1);
            this.storage.set('favoriteConferences', data).then(() => {
              console.log('notifications updated');
              this.isFavorite = false;
              let message: string;
              if(this._translationProvider.lang === 'es') {
                message = 'Borrado correctamente de Favoritos.';
              } else {
                message = 'Successfully deleted from Favorites.';
              }
              const toast = this.toastCtrl.create({
                message: message,
                duration: 2000
              });
              toast.present();
            });
          }
        }
      })
    }
    
  }

  getFavoriteColor() {
    if(this.isFavorite) {
      return 'red';
    } else {
      return 'grey'
    }
  }

}
