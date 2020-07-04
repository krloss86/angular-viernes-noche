import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class Nacionaidad {
  constructor(public id: number, public pais: string){

  }
}
@Component({
  selector: 'app-fomulario-reactive',
  templateUrl: './fomulario-reactive.component.html',
  styleUrls: ['./fomulario-reactive.component.css']
})
export class FomularioReactiveComponent implements OnInit {

  registerForm: FormGroup;

  nacionalidades: Nacionaidad[] = [];
  nacionalidad: Nacionaidad;

  // inyeccion de dependencias
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

   createForm(): FormGroup {
     return this.registerForm = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]],
       nacionalidad: [['', [Validators.required]]],
       tc: ['', [Validators.requiredTrue]]
     });
   }

   // ciclo de vida
   ngOnInit(): void {
    this.nacionalidades.push(new Nacionaidad(1, 'Arg'));
    this.nacionalidades.push(new Nacionaidad(1, 'Bra'));
  }

}
