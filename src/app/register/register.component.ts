import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = '';
  registerForm: FormGroup;
  error: string;
  loading: boolean;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.minLength(3), Validators.required] ],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]]
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    if (this.registerForm.invalid) {
      this.error = 'Debe completar los datos';
      return;
    }

    this.loading = true;

    // tomar los datos
    // enviamos al servicio
    console.log(this.registerForm.value);
  }

  public get f() {
    return this.registerForm.controls;
  }

}
