import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  valor: number;
  name: string;

  private valorObs = new BehaviorSubject<number>(0);
  valorActual = this.valorObs.asObservable();

  constructor() {
    this.valor = 0;
    this.name = 'ContadorService-' + Math.random();
  }

  getValor(): number {
    return this.valor;
  }

  /**
   * Incrementa de a un el valor
   */
  incrementar(): void {
    this.valor++;
  }

  next(value: number): void {
    this.valorObs.next(value);
  }

  getCurrentValue(): number {
    return this.valorObs.value;
  }
}
