import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrabajoDetailsPage } from './trabajo-details';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TrabajoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrabajoDetailsPage),
    TranslateModule.forChild()
  ],
})
export class TrabajoDetailsPageModule {}
