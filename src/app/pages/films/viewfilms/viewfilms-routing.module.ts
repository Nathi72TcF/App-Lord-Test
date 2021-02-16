import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewfilmsPage } from './viewfilms.page';

const routes: Routes = [
  {
    path: '',
    component: ViewfilmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewfilmsPageRoutingModule {}
