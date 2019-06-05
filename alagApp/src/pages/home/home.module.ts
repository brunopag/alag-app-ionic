import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HomePage } from './home';
import { HeaderNavbarComponent } from '../../components/header-navbar/header-navbar';

@NgModule({
  declarations: [
    HomePage,
    HeaderNavbarComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    TranslateModule.forChild(),
    HeaderNavbarComponent
  ],
})
export class HomePageModule {}
