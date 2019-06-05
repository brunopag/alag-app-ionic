import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationPage } from './notification';
import { HeaderNavbarComponent } from '../../components/header-navbar/header-navbar';

@NgModule({
  declarations: [
    NotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationPage),
    HeaderNavbarComponent
  ],
})
export class NotificationPageModule {}
