import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProduitsPage } from '../produits/produits';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProduitsPage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
