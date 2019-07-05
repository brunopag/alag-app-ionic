import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

// Storage Module
import { Storage } from '@ionic/storage';
import { TranslationProvider } from '../../providers/translation/translation';

@IonicPage()
@Component({
  selector: 'page-trabajo-details',
  templateUrl: 'trabajo-details.html',
})
export class TrabajoDetailsPage {

  trabajo: any;
  isFavorite = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private storage: Storage, 
              public _translationProvider: TranslationProvider,
              public toastCtrl: ToastController) {
    this.trabajo = this.navParams.get('trabajo');
    console.log(this.trabajo);
    this.storage.get('favoriteTrabajos').then((data:any[]) => {
      console.log(data);
      if(data !== null) {
        let trabajoInFavorites = data.find(row => row.trabajo._id === this.trabajo._id);
        if(trabajoInFavorites) {
          this.isFavorite = true;
        }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrabajoDetailsPage');
  }

  superindiceLugares(lugaresTrabajo: any) {
    let superindice: string = '';
    if (lugaresTrabajo) {
      for (let lugar of lugaresTrabajo) {
        if (superindice === '') {
          superindice = superindice + lugar;
        } else {
          superindice = superindice + ',' + lugar;
        }
      }
    }
    return superindice;
  }

  inicialesNombres(nombres: string) {
    let iniciales: string = '';
    let arrayNombres: any[] = nombres.split(' ');
    for (let nombre of arrayNombres) {
      iniciales = iniciales + nombre.substr(0, 1) + '.';
    }
    return iniciales.toUpperCase();
  }

  agregarFavorito(){
    if(!this.isFavorite) {
      this.storage.get('favoriteTrabajos').then((data:any[]) => {
        console.log(data);
        if(data === null) {
          let favoriteTrabajo = [];
          favoriteTrabajo.push({trabajo: this.trabajo});
          this.storage.set('favoriteTrabajos', favoriteTrabajo).then(() => {
            console.log('notifications updated');
            this.isFavorite = true;
          });
        } else {
          data.push({trabajo: this.trabajo});
          this.storage.set('favoriteTrabajos', data).then(() => {
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
      this.storage.get('favoriteTrabajos').then((data:any[]) => {
        console.log(data);
        if(data !== null) {
          let indexFavorite = data.findIndex(row => row.trabajo._id === this.trabajo._id);
          if(indexFavorite !== -1) {
            data.splice(indexFavorite, 1);
            this.storage.set('favoriteTrabajos', data).then(() => {
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

}
