import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TrabajosProvider } from '../../providers/trabajos/trabajos';
import { TrabajoDetailsPage } from '../trabajo-details/trabajo-details';
import { PagesFavoritesListPage } from '../pages-favorites-list/pages-favorites-list';

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public _TrabajosProvider: TrabajosProvider,
              public loadingCtrl: LoadingController) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrabajosPage');
  }

  getItems(event) {

  }

  categoriaChanged() {
    console.log('categoriaSelected', this.categoriaSelected);
    if(this.categoriaSelected) {
      // cargo arbol de categorias
      let loading = this.loadingCtrl.create({
        content: 'Cargando Categorias y Sub-categorias...'
      });
      loading.present();
      this.categoriasNavegacion.push(JSON.parse(JSON.stringify(this.categoriaSelected)));
      console.log(this.categoriasNavegacion);
      setTimeout(
        ()=> { 
          this._TrabajosProvider.getCategoriaContrabajos(this.categoriaSelected._id).subscribe(resp => {
            console.log(resp);
            this.categoriasSelect = resp.categoriaTrabajo[0].childrens;
            this.trabajos = resp.trabajos;
            loading.dismiss();
          }); 
        }, 1000);
      
    }
  }

  navegarAcategoria(categoria: any) {
    console.log(categoria);
    this.trabajos = []
    this.categoriaSelected = categoria;
    console.log(this.categoriasNavegacion)
    let indexCategoria = this.categoriasNavegacion.findIndex(row => row._id === categoria._id);
    console.log(indexCategoria);
    this.categoriasNavegacion.splice(indexCategoria+1, this.categoriasNavegacion.length-1);
    if(this.categoriaSelected) {
      let loading = this.loadingCtrl.create({
        content: 'Cargando Categorias y Sub-categorias...'
      });
      loading.present();
      setTimeout(
        ()=> { 
          this._TrabajosProvider.getCategoriaContrabajos(this.categoriaSelected._id).subscribe(resp => {
            console.log(resp);
            this.categoriasSelect = resp.categoriaTrabajo[0].childrens;
            this.trabajos = resp.trabajos;
            loading.dismiss();
          }); 
        }, 2000);
      
    }
  }

  goHome() {
    this.trabajos = [];
    this.categoriasNavegacion = [];
    this.categoriasSelect = []
    this._TrabajosProvider.getAllCategoriasTrabajos().subscribe((categoriasTrabajos: any) => {
      console.log(categoriasTrabajos);
      for(let categoriaTrabajo of categoriasTrabajos) {
        if(!categoriaTrabajo.parent) {
          this.categoriasSelect.push(categoriaTrabajo);
        }
      }
      console.log('Categorias Padres', this.categoriasSelect);
    });
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
    this.navCtrl.push(PagesFavoritesListPage);
  }

}
