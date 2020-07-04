import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BaseserviceService } from './baseservice.service';
import { User } from '../profile/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseserviceService {

  private updateEndPoint = '/api/profile';

  constructor(
    private httpclient: HttpClient,
    private authenticationService: AuthenticationService) {
      super(httpclient);
    }

  updateProfile(user: User): Observable<User> {
    // toma el usuario
    const currentUser = this.authenticationService.currentUserValue;

    // completa los datos del curso
    user.address = currentUser.address;

    // user.address =  user.address;

    // put
    return this.httpclient.put<User>(
      `${this.baseUrl}${this.updateEndPoint}`,
       user
    ).pipe(map(data => {
      // store user details and jwt token to keep user logged in between page refreshes
      this.authenticationService.updateUser(user);
      return data;
    }));
  }

  updateCurso(curso: any): Observable<User> {
    const currentUser = this.authenticationService.currentUserValue;
    currentUser.address = curso;
    console.log(currentUser);
    return this.httpclient.put<User>(
      `${this.baseUrl}${this.updateEndPoint}`,
      currentUser
    ).pipe(map(data => {
      // store user details and jwt token to keep user logged in between page refreshes
      this.authenticationService.updateUser(curso);
      return data;
    }));
  }
}



@Injectable({
  providedIn: 'root'
})
export class ProfileResolve implements Resolve<User> {

  constructor(private authenticationService: AuthenticationService) {
    console.log('creando ClienteInformacionResolve');
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User {
    console.log(`ProfileResolve`);
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}

