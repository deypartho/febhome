import { Injectable } from '@angular/core';
import { configration } from './config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  _URL = "https://my-json-server.typicode.com/deypartho/fabhomdata";

  config = configration;
  constructor(
    private http: HttpClient
  ) { }
  
  getData(){
    return this.config;
  }
  getwhatWeDoId(id : number){
    return this.config.whatWeDo[id - 1]
  }
  getShopItem(id : number){
    return this.config.shop[id - 1]
  }

  getCategoryItem(): Observable<any>{
    return this.http.get<any>(this._URL + '/category')
  }
  getCategoryDetails(title){
    return this.http.get(this._URL + '/shop/?category='+ title);
  }
  getCatProducts(): Observable<any>{
    return this.http.get<any>(this._URL + '/shop');
  }
}
