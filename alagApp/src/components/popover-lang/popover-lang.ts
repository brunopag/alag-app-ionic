import { Component } from '@angular/core';
import { ViewController, ToastController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';

/**
 * Generated class for the PopoverLangComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover-lang',
  templateUrl: 'popover-lang.html'
})
export class PopoverLangComponent {

  text: string;

  constructor( public viewCtrl: ViewController, 
    public _translationProvider: TranslationProvider,
    public toastCtrl: ToastController) {
    console.log('Hello PopoverLangComponent Component');
    this.text = 'Hello World';
  }

  langSelected(lang: string) {
    this.viewCtrl.dismiss();
    this._translationProvider.switchLanguage(lang);
    let message: string;
    if(lang === 'es') {
      message = 'Su configuración ha sido guardada correctamente.';
    } else {
      message = 'Your settings have been saved.';
    }
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  closePopover() {
    console.log('se ejecuto');
    this.viewCtrl.dismiss();
  }

}
