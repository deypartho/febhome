import { Injectable } from '@angular/core';
import { configration } from './config';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  config = configration;
  constructor() { }
  getData(){
    return this.config;
  }
  getwhatWeDoId(id : number){
    return this.config.whatWeDo[id - 1]
  }
  getShopItem(id : number){
    return this.config.shop[id - 1]
  }
 
}
