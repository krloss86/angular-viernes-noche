import { Component, OnInit, Input } from '@angular/core';
import { ContadorService } from '../services/contador.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-visualizardor2',
  templateUrl: './visualizardor2.component.html',
  styles: [],
  providers: [ContadorService]
})
export class Visualizardor2Component implements OnInit {

  @Input()
  valor: number;

  alumno: string;

  constructor(
    public cs: ContadorService,
    public ls: LoggerService) {
  }

  ngOnInit(): void {
    this.ls.current.subscribe(
      x => this.alumno = x
    );
  }

  incrementar(): void {
    this.cs.incrementar();
    this.valor = this.cs.getValor();
  }

  changeAlumno() {
    this.ls.changeAlumno('carlos');
  }
}
