import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConferenciaDetailsPage } from './conferencia-details';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ConferenciaDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConferenciaDetailsPage),
    TranslateModule.forChild()
  ],
})
export class ConferenciaDetailsPageModule {}
