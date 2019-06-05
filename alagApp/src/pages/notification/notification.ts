import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Notification } from '../../models/notification.model';
import { TranslationProvider } from '../../providers/translation/translation';

//Storage Module
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  notification: Notification;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public _translationProvider: TranslationProvider,
              private storage: Storage) {
    this.notification = this.navParams.get('notification');
    console.log(this.notification);
    this.marcarLeido(this.notification);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  getTituloByLang (objeto: any) {
    if (this._translationProvider.lang === 'es') {
      objeto.titulo_lang = objeto.titulo_es;
    } else if (this._translationProvider.lang === 'en') {
      objeto.titulo_lang = objeto.titulo_en;
    }
    return objeto.titulo_lang;
  }

  getContentByLang (objeto: any) {
    if (this._translationProvider.lang === 'es') {
      objeto.content_lang = objeto.content_es;
    } else if (this._translationProvider.lang === 'en') {
      objeto.content_lang = objeto.content_en;
    }
    return objeto.content_lang;
  }

  marcarLeido(notification: Notification){
    console.log('marcarLeido ejecutado');
    this.storage.get('notificationsStorage').then((data:any[]) => {
      let resultado: any = data.find(notiStorage => notiStorage._id === notification._id);
      resultado.read = true;
      console.log(resultado);
      console.log(data);
      this.storage.set('notificationsStorage', data).then(() => {
        console.log('notifications updated');
      });
    });
    
  }

}
