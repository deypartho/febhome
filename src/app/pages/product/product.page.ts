import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/providers/services.service';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  items: any;
 
  constructor(
    public popoverCtrl: PopoverController, 
    private route:ActivatedRoute, 
    private service: ServicesService,
    public loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.items= this.getShopItem(id);
  }
  getShopItem(id : number){
    return this.service.getShopItem(id);
  }
  async presentPopover(event: Event) {   
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
  async openSocial(network: string, fab: HTMLIonFabElement) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }
}
