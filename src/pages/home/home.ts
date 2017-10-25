import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
    slides = [
        {
            title: "Bienvenue sur EasySell!",
            description: "<b>EasySell</b> est une application simple d’utilisation utilisable par les professionnels comme les particuliers !",
            image: "assets/imgs/logo.png",
        },

        {
            title: "Qu'est-ce que EasySell?",
            description: "<b>EasySell</b> vous permet de gérer votre base de données de vendeur : créer, modifier, supprimer vos articles.",
            image: "assets/imgs/logo.png",
        }
    ];
}
