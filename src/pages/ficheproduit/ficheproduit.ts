import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the FicheproduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ficheproduit',
  templateUrl: 'ficheproduit.html',
})
export class FicheproduitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Waw!',
            subTitle: 'Ceci est un popup, felicitation tu sais cliquer, tu peux retourner en arrière maintenant',
            buttons: ['OK chef']
        });
        alert.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FicheproduitPage');
  }

}
