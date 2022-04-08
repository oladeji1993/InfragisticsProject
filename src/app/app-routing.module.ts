import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grid2Component } from './components/grid2/grid2.component';
import { Grid3Component } from './components/grid3/grid3.component';
import { Grid4Component } from './components/grid4/grid4.component';
import { HomeComponent } from './components/home/home.component';
import { NewGridComponent } from './newgrid/newgrid.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Grid1',
    pathMatch: 'full'
  },
  {
    path: 'Grid1',
    component: HomeComponent
  },
  {
    path: 'Grid2',
    component: Grid2Component
  },
  {
    path: 'Grid3',
    component: Grid3Component
  },
  {
    path: 'Grid4',
    component: Grid4Component
  },
  { path: 'newgrid', component: NewGridComponent, data: { text: 'newGrid' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
