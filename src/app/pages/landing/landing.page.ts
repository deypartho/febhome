import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../providers/services.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  landingMenu: any;
  constructor(
    private service: ServicesService
  ) { }

  ngOnInit() {
    this.landingMenu = this.getLandingData()
    console.log(this.landingMenu)
  }
  getLandingData(){
    return this.service.getData().landingMenu;
  }
}
