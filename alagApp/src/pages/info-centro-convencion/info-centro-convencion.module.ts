import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoCentroConvencionPage } from './info-centro-convencion';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    InfoCentroConvencionPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoCentroConvencionPage),
    TranslateModule.forChild(),
  ],
})
export class InfoCentroConvencionPageModule {}
