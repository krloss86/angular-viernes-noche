import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  listaAlumnos = new BehaviorSubject<string>('');
  current = this.listaAlumnos.asObservable();

  constructor() { }

  log(data: any): void {
    console.log(data);
  }

  changeAlumno(alumno: string) {
    this.listaAlumnos.next(alumno);
  }
}