import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/providers/services.service';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover';
@Component({
  selector: 'app-whatwedodetail',
  templateUrl: './whatwedodetail.page.html',
  styleUrls: ['./whatwedodetail.page.scss'],
})
export class WhatwedodetailPage implements OnInit {
  WhatweDoDetail: any;
 
  constructor(public popoverCtrl: PopoverController, private route:ActivatedRoute, private service: ServicesService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.WhatweDoDetail= this.whatWeDoDetail(id);
  }
  whatWeDoDetail(id : number){
    return this.service.getwhatWeDoId(id);
  }
  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

}
