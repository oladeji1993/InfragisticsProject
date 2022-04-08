import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grid2Component } from './components/grid2/grid2.component';
import { Grid3Component } from './components/grid3/grid3.component';
import { Grid4Component } from './components/grid4/grid4.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'grid1',
    pathMatch: 'full'
  },
  {
    path: 'grid1',
    component: HomeComponent
  },
  {
    path: 'grid2',
    component: Grid2Component
  },
  {
    path: 'grid3',
    component: Grid3Component
  },
  {
    path: 'grid4',
    component: Grid4Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
