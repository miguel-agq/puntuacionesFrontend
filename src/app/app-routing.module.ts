import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaJugadorComponent } from './components/lista-jugador/lista-jugador.component';
import { AddJugadorComponent } from './components/add-jugador/add-jugador.component';
import { EditJugadorComponent } from './components/edit-jugador/edit-jugador.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: ListaJugadorComponent },
  { path: 'listaJugadores', component: ListaJugadorComponent },
  { path: 'addJugador', component: AddJugadorComponent },
  { path: 'editJugador/:id', component: EditJugadorComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
