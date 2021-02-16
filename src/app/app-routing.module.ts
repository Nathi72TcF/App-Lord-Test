import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  },
  // {
  //   path: 'films',
  //   loadChildren: () => import('./pages/films/films.module').then( m => m.FilmsPageModule)
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  // {
  //   path: 'vehicles',
  //   loadChildren: () => import('./pages/vehicles/vehicles.module').then( m => m.VehiclesPageModule)
  // },
  // {
  //   path: 'starships',
  //   loadChildren: () => import('./pages/starships/starships.module').then( m => m.StarshipsPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
