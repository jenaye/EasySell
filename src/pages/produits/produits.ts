import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProduitProvider } from '../../providers/produit/produit'

/**
 * Generated class for the ProduitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produits',
  templateUrl: 'produits.html',
})
export class ProduitsPage {
  private products = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private productprovider: ProduitProvider
  ) {
  }

  ionViewDidLoad() {
    this.productprovider.getAllProduct().subscribe(produits => {
      console.log(produits)
        this.products = produits;
    });
    console.log('ionViewDidLoad ProduitsPage');
  }

}
