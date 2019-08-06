import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanoAuditorioPage } from './plano-auditorio';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PlanoAuditorioPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanoAuditorioPage),
    TranslateModule.forChild()
  ],
})
export class PlanoAuditorioPageModule {}
