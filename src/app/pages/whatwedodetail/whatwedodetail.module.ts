import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatwedodetailPageRoutingModule } from './whatwedodetail-routing.module';

import { WhatwedodetailPage } from './whatwedodetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatwedodetailPageRoutingModule
  ],
  declarations: [WhatwedodetailPage]
})
export class WhatwedodetailPageModule {}
