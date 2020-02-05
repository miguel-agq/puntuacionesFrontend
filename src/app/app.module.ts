import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaJugadorComponent } from './components/lista-jugador/lista-jugador.component';
import { HttpClientModule } from '@angular/common/http';
import { AddJugadorComponent } from './components/add-jugador/add-jugador.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaJugadorComponent,
    AddJugadorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
