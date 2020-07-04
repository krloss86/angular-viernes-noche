import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  providers: [AlumnoService]
})
export class AlumnoComponent implements OnInit {

  @Input() listaAlumnos: string[];
  @Output() eliminarAlumnoEnPadre = new EventEmitter<string>();

  valorObservado: number;

  constructor(
    as: AlumnoService,
    private cs: ContadorService) {
      console.log('AlumnoComponent-'+ as.getNombre());
  }

  ngOnInit(): void {
     // la variable local valorObservado depende 
    // del observable valorActual
    this.cs.valorActual.subscribe(
      valor => this.valorObservado = valor
    );
  }

  eliminarAlumnoHijo(alumno: string): void {
    this.eliminarAlumnoEnPadre.emit(alumno);
  }
}
