import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover';
import { ServicesService } from 'src/app/providers/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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
  constructor(public popoverCtrl: PopoverController, private service: ServicesService) { }

  ngOnInit() {
    this.whatWeDo = this.getwhatWeDo()
  }
  getwhatWeDo(){
    return this.service.getData().whatWeDo;
  }
  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
