import { Component } from '@angular/core';
import { NotificationsProvider } from '../../providers/notifications/notifications';
import { Notification } from '../../models/notification.model';
import { ViewController, NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';

//Storage Module
import { Storage } from '@ionic/storage';
import { NotificationPage } from '../../pages/notification/notification';
import { NotificationListPage } from '../../pages/notification-list/notification-list';

/**
 * Generated class for the PopoverNotiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover-noti',
  templateUrl: 'popover-noti.html'
})
export class PopoverNotiComponent {

  notifications: Notification[];
  notificationListPage = NotificationListPage;

  constructor(public viewCtrl: ViewController, 
              public navCtrl: NavController,
              public _notificationsProvider: NotificationsProvider, 
              public _translationProvider: TranslationProvider,
              private storage: Storage) {
    this.loadNotification();
  }

  loadNotification() {
    console.log('se ejecuto el load del popover');
    this.storage.get('notificationsStorage').then((data:any[]) => {
      this.notifications = data;
      console.log(this.notifications);
    });
  }

  validaNotificacion(notiFromServer: Notification, notiFromStorage: Notification) {
    return notiFromServer._id === notiFromStorage._id;
  }

  closePopover() {
    console.log('se ejecuto');
    this.viewCtrl.dismiss();
  }

  getDateFormat(timestamp: number) {
    return new Date(timestamp);
  }

  getTituloByLang (objeto: any) {
    if (this._translationProvider.lang === 'es') {
      objeto.titulo_lang = objeto.titulo_es;
    } else if (this._translationProvider.lang === 'en') {
      objeto.titulo_lang = objeto.titulo_en;
    }
    return objeto.titulo_lang;
  }

  seeNotificationDetails(notification: Notification) {
    this.navCtrl.push(NotificationPage, {notification: notification});
  }

  ionViewDidEnter() {
    this.loadNotification();
  }

}
