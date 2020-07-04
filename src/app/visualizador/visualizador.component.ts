import { Component, Input, OnInit } from '@angular/core';
import { ContadorService } from '../services/contador.service';

@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css'],
  providers: [ContadorService]
})
export class VisualizadorComponent implements OnInit {

  @Input()
  valor: number;

  constructor(public cs: ContadorService) { }

  ngOnInit(): void {
  }

  incrementar(): void {
    this.cs.incrementar();
    this.valor = this.cs.getValor();
  }
}
