import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}
)
export class AlumnoService {

  private alumnos = [];
  nombre: string;
  constructor() {
    this.nombre = 'AlumnoService- ' + Math.random();
  }

  agregarAlumno(nombre: string) {
    this.alumnos.push(nombre);
  }

  removeAlumno(alumno: string): void {
    this.alumnos = this.alumnos.filter(item => item !== alumno);
  }

  public getAlumnos(): string[] {
    return this.alumnos;
  }

  getNombre(): string {
    return this.nombre;
  }
}
