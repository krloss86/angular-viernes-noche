import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseserviceService {

  protected baseUrl = environment.baseUrl;

  constructor(protected httpClient: HttpClient) {
      console.log('creando BaseService...');
  }
}
