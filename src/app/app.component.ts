import { Component, OnInit } from '@angular/core';
import { ContadorService } from './services/contador.service';
import { AlumnoService } from './alumno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlumnoService], // nuevo servicio
})
export class AppComponent implements OnInit{
  title = 'webapp';

  valor: number;
  alumnos: string[];

  valorObservado: number;

  constructor(
    public cs: ContadorService,
    public as: AlumnoService){
      this.as.agregarAlumno('Juan Luque');
      this.as.agregarAlumno('Marcelo Santillan');
      this.as.agregarAlumno('Josue Morales');

      console.log('AppComponent - ' + as.getNombre());
  }

  ngOnInit() {
    this.valor = this.cs.getValor();

    this.alumnos = this.as.getAlumnos();

    // la variable local valorObservado depende
    // del observable valorActual
    this.cs.valorActual.subscribe(
      valor => this.valorObservado = valor
    );
  }

  incrementar(): void {
    // this.cs.incrementar();
    // this.valor = this.cs.getValor();
    this.cs.next(10);
  }

  incrementarEnApp(): void {
    this.incrementar();
  }

  agregarAlumno(): void {
    this.as.agregarAlumno('Diego Magno');
  }

  eliminarAlumno(alumno: string): void {
    this.as.removeAlumno(alumno);
    this.alumnos = this.as.getAlumnos();

    this.incrementar();
  }
}
