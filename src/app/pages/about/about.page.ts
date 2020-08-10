import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover';
import { ServicesService } from 'src/app/providers/services.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
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
