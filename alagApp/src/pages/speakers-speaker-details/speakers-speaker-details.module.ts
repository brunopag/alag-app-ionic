import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeakersSpeakerDetailsPage } from './speakers-speaker-details';

@NgModule({
  declarations: [
    SpeakersSpeakerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeakersSpeakerDetailsPage),
  ],
})
export class SpeakersSpeakerDetailsPageModule {}
