import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';
import { ActivatedRoute, Router } from '@angular/router';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-edit-jugador',
  templateUrl: '../add-jugador/add-jugador.component.html',
  styleUrls: ['./edit-jugador.component.css']
})
export class EditJugadorComponent implements OnInit {
  public jugador: Jugador;

  constructor(private activatedRoute: ActivatedRoute,
              private jugadorService: JugadorService,
              private router: Router) {
    this.jugador = new Jugador('', '', 0);
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.jugadorService.getJugador(id).subscribe(
      result => {
        this.jugador = result.datos;
      },
      error => {
        alert(`Error al cargar el jugador ${error}`);
      },
      () => {

      }
    );
  }

  onSubmit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.jugadorService.updateJugador(id, this.jugador).subscribe(
      response => {
        this.router.navigate(['/listaJugadores']);
      },
      error => {
        alert('error a actualizar el error' + error);
      },
      () => {

      }
    );
  }
}
