import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button>
        <ion-label>Interior Solutions</ion-label>
      </ion-item>
      <ion-item button>
        <ion-label>Turnkey Solutions</ion-label>
      </ion-item>
      <ion-item button>
        <ion-label>Engineering & Construction</ion-label>
      </ion-item>
      <ion-item button>
        <ion-label>Style & Branding</ion-label>
      </ion-item>
      <ion-item button>
        <ion-label>Get a Quote</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
