import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CursoDataComponent } from './curso-data/curso-data.component';
import { PersonaDataComponent } from './persona-data/persona-data.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: 'profile',
    component: ProfileComponent/*, canActivate: [AuthGuard],
    resolve : {
      profileData: ProfileResolve
    }*/,
    children: [
      {
        path: 'curso-data', component: CursoDataComponent/*,
        resolve : {
          profileData: ProfileResolve
        },*/
      },
      {
        path: 'persona-data', component: PersonaDataComponent/*, resolve : {
          profileData: ProfileResolve
        },*/
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
