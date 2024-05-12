import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ComandaComponent } from './components/comanda/comanda.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [AppComponent, ListComponent, ComandaComponent, Error404Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
