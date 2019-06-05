import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationListPage } from './notification-list';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NotificationListPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationListPage),
    TranslateModule.forChild()
  ],
})
export class NotificationListPageModule {}
