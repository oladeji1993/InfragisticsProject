import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Grid2Component } from './components/grid2/grid2.component';
import { Grid3Component } from './components/grid3/grid3.component';
import { HeadNavComponent } from './components/head-nav/head-nav.component';
import { Grid4Component } from './components/grid4/grid4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxGridModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Grid2Component,
    Grid3Component,
    HeadNavComponent,
    Grid4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
