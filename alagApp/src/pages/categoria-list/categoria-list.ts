import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TrabajosProvider } from '../../providers/trabajos/trabajos';
import { TranslationProvider } from '../../providers/translation/translation';

/**
 * Generated class for the CategoriaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria-list',
  templateUrl: 'categoria-list.html',
})
export class CategoriaListPage {

  categoriasSelect: any = [];
  navegacionCategorias: any = [];
  callback;

  constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                public _TrabajosProvider: TrabajosProvider,
                public loadingCtrl: LoadingController,
                public _translationProvider: TranslationProvider) {
    this.homeNavegacion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaListPage');
  }

  seleccionarCategoria(categoria) {
    console.log(categoria);
    this.navegacionCategorias.push(categoria);
    if(categoria.childrens && categoria.childrens.length > 0) {
      this.categoriasSelect = categoria.childrens;
    } else {
      this.callback = this.navParams.get("callback")
       this.callback({categoria: categoria, categoriasNavegacion: this.navegacionCategorias}).then(()=>{
          this.navCtrl.pop();
       });
    }
  }

  navegarCategoria(i: number, categoria: any) {
    if(categoria.childrens && categoria.childrens.length > 0) {
      this.categoriasSelect = categoria.childrens;
    }
    this.navegacionCategorias.splice(i+1, this.navegacionCategorias.length-1);
  }

  homeNavegacion() {
    this.navegacionCategorias = [];
    this.categoriasSelect = []
    let loading = this.loadingCtrl.create({
        content: 'Cargando Categorias y Sub-categorias...'
    });
      loading.present();
      this._TrabajosProvider.getAllCategoriasTrabajos().subscribe((categoriasTrabajos: any) => {
      console.log(categoriasTrabajos);
      for(let categoriaTrabajo of categoriasTrabajos) {
        if(!categoriaTrabajo.parent) {
          this.categoriasSelect.push(categoriaTrabajo);
        }
      }
      loading.dismiss();
      console.log('Categorias Padres', this.categoriasSelect);
    });
  }

  getNombreByLang (objeto: any) {
    if (this._translationProvider.lang === 'es') {
      objeto.nombre_lang = objeto.nombre_es;
    } else if (this._translationProvider.lang === 'en') {
      objeto.nombre_lang = objeto.nombre_en;
    }
    return objeto.nombre_lang;
  }

}
