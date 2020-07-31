import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../providers/services.service';
import { PopoverController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverPage } from '../popover/popover';
import { Products } from '../../providers/products';
import { Category } from '../../providers/category';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  id: Category[];
  catproducts: any;
  catitem: any;
  constructor(
    private route: ActivatedRoute, 
    public popoverCtrl: PopoverController, 
    private service: ServicesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.loadProductDetails(this.id);
  }
  loadProductDetails(id){
    this.service.getCategoryDetails(id).subscribe(product => {
      this.catproducts = product;
      console.log(this.catproducts)
    });
  }
}
