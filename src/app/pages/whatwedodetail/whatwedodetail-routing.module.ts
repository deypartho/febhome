import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatwedodetailPage } from './whatwedodetail.page';

const routes: Routes = [
  {
    path: '',
    component: WhatwedodetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatwedodetailPageRoutingModule {}
