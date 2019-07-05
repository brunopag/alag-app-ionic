import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrabajosPage } from './trabajos';
import { HeaderNavbarComponent } from '../../components/header-navbar/header-navbar';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TrabajosPage,
    HeaderNavbarComponent
  ],
  imports: [
    IonicPageModule.forChild(TrabajosPage),
    HeaderNavbarComponent,
    TranslateModule.forChild()
  ],
})
export class TrabajosPageModule {}
