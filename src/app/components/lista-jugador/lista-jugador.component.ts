import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-lista-jugador',
  templateUrl: './lista-jugador.component.html',
  styleUrls: ['./lista-jugador.component.css']
})
export class ListaJugadorComponent implements OnInit {
  listaJugadores: Array<Jugador>;

  constructor(public jugadorService: JugadorService) { }

  ngOnInit() {
    this.getPuntuaciones();
  }

  getPuntuaciones() {
    this.jugadorService.getAllJugadores().subscribe(
      result => {
        this.listaJugadores = result['datos'];
      },
      error => {
        alert('error al listar las puntuaciones');
      },
      () => {

      }
    );
  }

  onBorrarPuntuacion(id: string) {
    this.jugadorService.removeJugador(id).subscribe(
      result => {
        this.getPuntuaciones();
      },
      error => {
        alert(`error al borrar la puntuacion ${error}`);
      },
      () => {

      }
    );
  }

}
