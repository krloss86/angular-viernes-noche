import { Component, OnInit } from '@angular/core';
import { Nacionaidad } from '../login/login.component';
import { LoginModel } from '../login/login-model';

export class Nacionalidad {
  constructor(public id: number, public pais: string){

  }
}

@Component({
  selector: 'app-formulario-template-driven',
  templateUrl: './formulario-template-driven.component.html',
  styleUrls: ['./formulario-template-driven.component.css']
})
export class FormularioTemplateDrivenComponent implements OnInit {

  nacionalidades: Nacionaidad[] = [];

  nacionalidad: Nacionaidad;

  loginModel: LoginModel;

  constructor() { }

  ngOnInit(): void {
    console.log('ejecuando onInit');
    // algo de ts, crear un array
    this.nacionalidades.push(new Nacionaidad(1, 'Arg'));
    this.nacionalidades.push(new Nacionaidad(2, 'Bra'));
    this.nacionalidades.push(new Nacionaidad(1, 'Per'));
    this.nacionalidades.push(new Nacionaidad(1, 'Ven'));
  }

  log(obj: any) {
    console.log(obj);
  }

  submitForm(formulario) {
    console.log(formulario);
  }
}
