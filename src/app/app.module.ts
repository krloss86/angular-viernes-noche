import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FomularioReactiveComponent } from './fomulario-reactive/fomulario-reactive.component';
import { FormularioTemplateDrivenComponent } from './formulario-template-driven/formulario-template-driven.component';
import { RegisterComponent } from './register/register.component';
import { VisualizadorComponent } from './visualizador/visualizador.component';
import { Visualizardor2Component } from './visualizardor2/visualizardor2.component';
import { Visualizardor3Component } from './visualizardor3/visualizardor3.component';
import { ContadorService } from './services/contador.service';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnoService } from './alumno.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { PersonaDataComponent } from './persona-data/persona-data.component';
import { CursoDataComponent } from './curso-data/curso-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FomularioReactiveComponent,
    FormularioTemplateDrivenComponent,
    RegisterComponent,
    VisualizadorComponent,
    Visualizardor2Component,
    Visualizardor3Component,
    AlumnoComponent,
    ProfileComponent,
    PersonaDataComponent,
    CursoDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ContadorService, AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
