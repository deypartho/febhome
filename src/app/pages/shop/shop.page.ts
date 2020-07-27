import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover';
import { ServicesService } from 'src/app/providers/services.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  slideOptsOne ={
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    loop: true,
    pagination: true,
    margin:0,
    item: 3
  };
  whatWeDo: any;
  shops: any;
  constructor(public popoverCtrl: PopoverController, private service: ServicesService) { }

  ngOnInit() {
    this.whatWeDo = this.getwhatWeDo()
    this.shops = this.getShop();
    console.log(this.shops)
  }
  getwhatWeDo(){
    return this.service.getData().whatWeDo;
  }
  getShop(){
    return this.service.getData().shop;
  }
  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

}
