import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover';
import { ServicesService } from 'src/app/providers/services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  whatWeDo: any;
  constructor(
    public popoverCtrl: PopoverController, 
    private service: ServicesService, 
    private router: Router,
    public loadingCtrl: LoadingController
    ) { }

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
