import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/theme/shared/models/login';
import { Register } from 'src/app/theme/shared/models/register';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(model: Login) {
    return this.http.post(`${environment.appUrl}/api/account/login`, model)
  }

  register(model: Register) {
    return this.http.post(`${environment.appUrl}/api/account/register`, model);
  }
}
