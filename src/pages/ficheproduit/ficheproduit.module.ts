import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheproduitPage } from './ficheproduit';

@NgModule({
  declarations: [
    FicheproduitPage,
  ],
  imports: [
    IonicPageModule.forChild(FicheproduitPage),
  ],
})
export class FicheproduitPageModule {}
