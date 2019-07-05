import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICES, CONGRESO_ID } from '../../config/config';

/*
  Generated class for the TrabajosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrabajosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TrabajosProvider Provider');
  }

  getAllCategoriasTrabajos() {
    let url = URL_SERVICES + '/categoriatrabajo';
    return this.http.get(url, {}).map((resp: any) => {
      return resp.categoriasTrabajo;
    });
  }

  getCategoriaContrabajos(categoria_id) {
    let url = URL_SERVICES + '/categoriatrabajo/get/categoriasConTrabajos?id='+categoria_id+'&congreso_id='+CONGRESO_ID;
    return this.http.get(url, {}).map((resp: any) => {
      return resp;
    });
  }

}
