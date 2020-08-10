import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociationPageRoutingModule } from './association-routing.module';

import { AssociationPage } from './association.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssociationPageRoutingModule
  ],
  declarations: [AssociationPage]
})
export class AssociationPageModule {}
