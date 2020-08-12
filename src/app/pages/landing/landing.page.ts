import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../providers/services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  landingMenu: any;
  constructor(
    private service: ServicesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.landingMenu = this.getLandingData()
    // console.log(this.landingMenu)
  }
  getLandingData(){
    return this.service.getData().landingMenu;
  }
  gotoHome(){
    this.router.navigate(['home']);
  }
  gotoAbout(){
    this.router.navigate(['about']);
  }
  gotoAssociation(){
    this.router.navigate(['association']);
  }
  gotoGallery(){
    this.router.navigate(['gallery']);
  }
  gotoProjects(){
    this.router.navigate(['projects']);
  }
  gotoContact(){
    this.router.navigate(['contact']);
  }
}
