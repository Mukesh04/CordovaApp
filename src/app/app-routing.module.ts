import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pickup-call',
    loadChildren: () => import('./page/pickup-call/pickup-call.module').then( m => m.PickupCallPageModule)
  },
  {
    path: 'my-pickup-calls',
    loadChildren: () => import('./page/my-pickup-calls/my-pickup-calls.module').then( m => m.MyPickupCallsPageModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./page/locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./page/loader/loader.module').then( m => m.LoaderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
