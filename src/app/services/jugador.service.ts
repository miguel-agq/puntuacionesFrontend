import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';


@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5200/';
  }

  getAllJugadores(): Observable<any> {
    return this.httpClient.get(this.url + 'puntuaciones');
  }

  addJugador(jugador: Jugador){
    const body = JSON.stringify(jugador);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient.post(this.url + 'puntuacion', body, { headers });
  }
}
