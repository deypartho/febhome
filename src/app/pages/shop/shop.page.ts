import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover';
import {ActivatedRoute, Router} from "@angular/router";
import { ServicesService } from '../../providers/services.service';
import { Category } from '../../providers/category';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  categorys: any;
 
  constructor(
    public popoverCtrl: PopoverController,
    private router: Router,
    private route: ActivatedRoute,
    private service: ServicesService,
    public loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    this.service.getCategoryItem().subscribe(data=>{
      this.categorys = data
      console.log(this.categorys)
    })
  }
  getCatIdNavigate(category : Category){
    this.router.navigate(['/products', category.title]);
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
