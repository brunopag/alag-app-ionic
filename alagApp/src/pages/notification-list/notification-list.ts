import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Notification } from '../../models/notification.model';
import { NotificationsProvider } from '../../providers/notifications/notifications';

//Storage Module
import { Storage } from '@ionic/storage';
import { NotificationPage } from '../notification/notification';

/**
 * Generated class for the NotificationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification-list',
  templateUrl: 'notification-list.html',
})
export class NotificationListPage {

  notifications: Notification[];
  notificationsQty: number = 2;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public _notificationsProvider: NotificationsProvider,
    private storage: Storage) {
      this.loadNotification();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationListPage');
  }

  loadNotification() {
    console.log('se ejecuto el load')
    this._notificationsProvider.getNotifications().subscribe((resp: any) => {
      let notificationsFromServer = resp.notifications;
      this.storage.get('notificationsStorage').then((data:any[]) => {
        if(data === null) {
          // Si no hay cargada ninguna notificacion en el storage
          for(let notification of notificationsFromServer) {
            notification.read = false;
          }
          this.storage.set('notificationsStorage', notificationsFromServer).then(() => {
            console.log('notifications updated');
            this.notifications = notificationsFromServer;
            this.notificationsQty = this.notifications.filter(noti => noti.read).length;
            console.log(this.notifications);
          });
        } else {
          // Si ya hay notificaciones en el storage
          for( let notification of notificationsFromServer) {
            let resultado = data.find(notiStorage => notiStorage._id === notification._id)
            if(!resultado) {
              console.log('se ejecuto no hay resultado');
              notification.read = false;
              data.unshift(notification);
            } 
          }
          console.log(data);
          this.storage.set('notificationsStorage', data).then(() => {
            this.notifications = data;
            console.log('se ejecuto!');
            this.notificationsQty = this.notifications.filter(noti => !noti.read).length;
          });
        }
      });
    });
  }

  getDateFormat(timestamp: number) {
    return new Date(timestamp);
  }

  seeNotificationDetails(notification: Notification) {
    this.navCtrl.push(NotificationPage, {notification: notification});
  }

  ionViewDidEnter() {
    this.loadNotification();
  }

}
