import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/providers/services.service';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  items: any;
 
  constructor(public popoverCtrl: PopoverController, private route:ActivatedRoute, private service: ServicesService) { }

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
}
