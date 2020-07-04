import { Component, EventEmitter, Input, OnInit, Output, Optional } from '@angular/core';
import { ContadorService } from '../services/contador.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-visualizardor3',
  templateUrl: './visualizardor3.component.html',
  styles: [
  ],
  providers: [{provide: LoggerService, useValue: null}]
})
export class Visualizardor3Component implements OnInit {

  @Input()
  valor: number;

  @Output() incrementarEnHijo = new EventEmitter<void>();

  constructor(
    public cs: ContadorService,
    @Optional() public ls: LoggerService,
  ) {
    if (ls) {
      this.ls.log('Creando Visualizardor3Component');
    }
  }

  ngOnInit(): void {
    this.ls ? this.ls.log('ngOnOnit de Visualizardor3') : console.log('no existe LoggerService');
  }

  incrementar(): void {
    this.cs.incrementar();
    this.valor = this.cs.getValor();
  }

  emit(): void {
    this.incrementarEnHijo.emit();
  }

}
