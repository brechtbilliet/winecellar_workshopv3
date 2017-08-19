import { Injectable } from '@angular/core';
import { Credentials } from '../types/Credentials';
import { Observable } from 'rxjs/Observable';
import { AuthenticationResult } from '../types/AuthenticationResult';
import { API_URL, LOCALSTORAGE_AUTH } from '../../configuration';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { WinecellarState } from '../../statemanagement/state';
import { Store } from '@ngrx/store';
import { ClearAuthenticationAction, SetAuthenticationAction } from '../../statemanagement/actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  constructor(private httpClient: HttpClient, private store: Store<WinecellarState>) {

  }

  authenticate(credentials: Credentials): Observable<AuthenticationResult> {
    return this.httpClient
      .post(`${API_URL}/authentication/login`, credentials)
      .do((result: AuthenticationResult) => {
        window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(result));
        this.store.dispatch(new SetAuthenticationAction(result));
      });
  }

  register(account: Account): Observable<AuthenticationResult> {
    return this.httpClient
      .post(`${API_URL}/authentication/register`, account)
      .do((result: AuthenticationResult) => {
        window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(result));
        this.store.dispatch(new SetAuthenticationAction(result));
      });
  }

  logout(): void {
    localStorage.removeItem(LOCALSTORAGE_AUTH);
    this.store.dispatch(new ClearAuthenticationAction());
  }

  checkInitialAuthentication(): void {
    const localStorageObj = window.localStorage.getItem(LOCALSTORAGE_AUTH);
    if (localStorageObj) {
      this.store.dispatch(new SetAuthenticationAction(JSON.parse(localStorageObj)));
    }
  }
}
