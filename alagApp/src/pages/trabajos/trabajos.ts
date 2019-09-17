import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TrabajosProvider } from '../../providers/trabajos/trabajos';
import { TrabajoDetailsPage } from '../trabajo-details/trabajo-details';
import { PagesFavoritesListPage } from '../pages-favorites-list/pages-favorites-list';
import { CategoriaListPage } from '../categoria-list/categoria-list';
import { TranslationProvider } from '../../providers/translation/translation';

@IonicPage()
@Component({
  selector: 'page-trabajos',
  templateUrl: 'trabajos.html',
})
export class TrabajosPage {

  categoriasSelect: any = [];
  categoriaSelected: any;
  categoriasNavegacion: any = [];
  trabajos: any = [];
  trabajosBusqueda: any = [];
  resultadoVacio = false;
  buscandoTrabajos = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public _TrabajosProvider: TrabajosProvider,
              public loadingCtrl: LoadingController,
              public _translationProvider: TranslationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrabajosPage');
  }

  inicialesNombres(nombres: string) {
    let iniciales: string = '';
    let arrayNombres: any[] = nombres.split(' ');
    for (let nombre of arrayNombres) {
      iniciales = iniciales + nombre.substr(0, 1) + '.';
    }
    return iniciales.toUpperCase();
  }

  verTrabajo(trabajo: any) {
    this.navCtrl.push(TrabajoDetailsPage, { 'trabajo': trabajo });
  }

  goFavorites() {
    this.navCtrl.push(PagesFavoritesListPage, {from: 'trabajos'});
  }

  goSeleccionCategoria() {
    // callback...
    let myCallbackFunction = function(_params) {
      console.log(_params);
      this.categoriaSelected = _params.categoria;
      this.categoriasNavegacion = _params.categoriasNavegacion;
      this.loadTrabajos(_params.categoria);
      return new Promise((resolve, reject) => {
              resolve();
          });
    }.bind(this);
    
    // push page...
    this.navCtrl.push(CategoriaListPage, {
     callback: myCallbackFunction
    });
  }

  loadTrabajos(categoria: any) {
    console.log(categoria);
    let loading = this.loadingCtrl.create({
      content: 'Cargando Trabajos...'
    });
    loading.present();
    this._TrabajosProvider.getCategoriaContrabajos(categoria._id).subscribe((resp: any) => {
      console.log('trabajos', resp);
      this.trabajos = resp.trabajos;
      loading.dismiss();
    })
  }

  deleteCategoria() {
    this.categoriaSelected = undefined;
  }

  getNombreByLang (objeto: any) {
    if (this._translationProvider.lang === 'es') {
      objeto.nombre_lang = objeto.nombre_es;
    } else if (this._translationProvider.lang === 'en') {
      objeto.nombre_lang = objeto.nombre_en;
    }
    return objeto.nombre_lang;
  }

  busuqedaTrabajos(busqueda) {
    this.trabajos = [];
    this.categoriasNavegacion = [];
    this.buscandoTrabajos = false;
    console.log(busqueda.target.value);
    let terminoBusqueda = busqueda.target.value;
    if(terminoBusqueda) {
      this.buscandoTrabajos = true;
      this._TrabajosProvider.busquedaTrabajos(terminoBusqueda).subscribe(resp => {
        console.log(resp)
        if(resp.trabajos.length !== 0 ){
          this.resultadoVacio = false;
          this.trabajosBusqueda = resp.trabajos
        } else {
          this.trabajosBusqueda = resp.trabajos
          this.resultadoVacio = true;
        }
        this.buscandoTrabajos = false;
      });
    } else {
      this.buscandoTrabajos = false;
      this.resultadoVacio = false;
      this.trabajosBusqueda = [];
    }
    
  }

  checkIfClear(busqueda) {
    console.log('checkIfClear');
    let terminoBusqueda = busqueda.target.value;
    if(!terminoBusqueda) {
      this.buscandoTrabajos = false;
      this.resultadoVacio = false;
      this.trabajosBusqueda = [];
    }
  }

}
