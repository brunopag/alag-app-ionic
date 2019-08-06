import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { PhotoViewer } from '@ionic-native/photo-viewer';

/**
 * Generated class for the PlanoAuditorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plano-auditorio',
  templateUrl: 'plano-auditorio.html',
})
export class PlanoAuditorioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private photoViewer: PhotoViewer
    ,private file: File) {
  }

  viewPhoto(imageName) {
    const ROOT_DIRECTORY = this.file.applicationStorageDirectory;//'file:///sdcard//';
    const downloadFolderName = 'tempDownloadFolder';
    
    //Create a folder in memory location
    this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
      .then((entries) => {
 
        //Copy our asset/img/plano-1.jpg to folder we created
        this.file.copyFile(this.file.applicationDirectory + "www/assets/imgs/planos/", imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
          .then((entries) => {
 
            this.photoViewer.show(ROOT_DIRECTORY + downloadFolderName + "/" + imageName, 'Do you want to Share', {share: true});
            
           })
          .catch((error) => {
            alert('1 error ' + JSON.stringify(error));
          });
      })
      .catch((error) => {
        alert('2 error' + JSON.stringify(error));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanoAuditorioPage');
  }

}
