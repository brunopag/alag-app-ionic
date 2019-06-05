import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { URL_SERVICES, CONGRESO_ID } from '../../config/config';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NotificationsProvider Provider');
  }

  getNotifications() {
    let url = URL_SERVICES + '/notification/' + CONGRESO_ID;

    return this.http.get(url);
  }

}
