import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

export class Nacionaidad {
  constructor(public id: number, public pais: string){

  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Bienvenido';
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
      private formBuilder: FormBuilder,
      private ls: AuthenticationService,
      private router: Router
      ) {
      this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    // toma los datos del formulario
    const username = this.loginForm.get('username').value;

    const password = this.loginForm.get('password').value;

    this.loading = true;

    // console.log('enviando al servicio');

    this.ls.login(username, password).subscribe(
      data => {
        this.router.navigate(['/profile']);
      },
      error => {
        this.loading = false;
      }
    );
  }

  // convenience getter for easy access to form fields
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
}
