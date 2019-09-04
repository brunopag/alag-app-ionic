import { Component } from '@angular/core';
import { PopoverLangComponent } from '../popover-lang/popover-lang';
import { PopoverController } from 'ionic-angular';
import { PopoverNotiComponent } from '../popover-noti/popover-noti';
import { NotificationsProvider } from '../../providers/notifications/notifications';

//Storage Module
import { Storage } from '@ionic/storage';
import { Notification } from '../../models/notification.model';

/**
 * Generated class for the HeaderNavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-navbar',
  templateUrl: 'header-navbar.html'
})
export class HeaderNavbarComponent  {

  colorNotification: string = '';
  notificationsQty: number;
  notifications: Notification[];

  text: string;

  constructor(public popoverController: PopoverController,
              public _notificationsProvider: NotificationsProvider,
              private storage: Storage) {
    console.log('Hello HeaderNavbarComponent Component');
    this.text = 'Hello World';
    this.loadNotification();
  }

  async presentPopover(ev: any) {
    let popover = this.popoverController.create(PopoverLangComponent);
    popover.present({
      ev: ev
    });
  }

  async presentPopoverNoti(ev: any) {
    let popover = this.popoverController.create(PopoverNotiComponent);
    popover.present({
      ev: ev
    });
    popover.onDidDismiss(() => this.loadNotification());
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

  



}
