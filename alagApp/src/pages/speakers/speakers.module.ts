import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakersPage } from './speakers';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderNavbarComponent } from '../../components/header-navbar/header-navbar';

@NgModule({
  declarations: [
    SpeakersPage,
    HeaderNavbarComponent
  ],
  imports: [
    IonicPageModule.forChild(SpeakersPage),
    TranslateModule.forChild(),
    HeaderNavbarComponent
  ],
})
export class SpeakersPageModule {}
