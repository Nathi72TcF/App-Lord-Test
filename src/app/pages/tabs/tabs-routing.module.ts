import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'films',
        loadChildren: () => import('./../films/films.module').then( m => m.FilmsPageModule )
      },
      {
        path: 'vehicles',
        loadChildren: () => import('./../vehicles/vehicles.module').then( m => m.VehiclesPageModule )
      },
      {
        path: 'starships',
        loadChildren: () => import('./../starships/starships.module').then( m => m.StarshipsPageModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
