import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPagePage } from './tabs-page.page';
import { HomePage } from '../home/home.page';
import { ShopPage } from '../shop/shop.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPagePage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'shop',
        children: [
          {
            path: '',
            loadChildren: () => import('../shop/shop.module').then(m => m.ShopPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs-page/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPagePageRoutingModule {}
