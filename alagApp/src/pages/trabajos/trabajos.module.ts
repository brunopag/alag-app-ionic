import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrabajosPage } from './trabajos';

@NgModule({
  declarations: [
    TrabajosPage,
  ],
  imports: [
    IonicPageModule.forChild(TrabajosPage),
  ],
})
export class TrabajosPageModule {}
