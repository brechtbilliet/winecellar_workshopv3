import { Injectable } from '@angular/core';
import { Credentials } from '../types/Credentials';
import { Observable } from 'rxjs/Observable';
import { AuthenticationResult } from '../types/AuthenticationResult';
import { API_URL, LOCALSTORAGE_AUTH } from '../../configuration';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {

  }

  authenticate(credentials: Credentials): Observable<AuthenticationResult> {
    return this.httpClient
      .post(`${API_URL}/authentication/login`, credentials)
      .do((result: AuthenticationResult) => {
        window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(result));
      });
  }

  register(account: Account): Observable<AuthenticationResult> {
    return this.httpClient
      .post(`${API_URL}/authentication/register`, account)
      .do((result: AuthenticationResult) => {
        window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(result));
      });
  }

  logout(): void {
    localStorage.removeItem(LOCALSTORAGE_AUTH);
  }

  checkInitialAuthentication(): any {
    return window.localStorage.getItem(LOCALSTORAGE_AUTH);
  }
}
