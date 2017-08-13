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

@Injectable()
export class AuthenticationService {
  constructor(private http: Http, private store: Store<WinecellarState>) {

  }

  authenticate(credentials: Credentials): Observable<AuthenticationResult> {
    return this.http
      .post(`${API_URL}/authentication/login`, credentials)
      .map(resp => resp.json())
      .do((result: AuthenticationResult) => {
        window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(result));
        this.store.dispatch(new SetAuthenticationAction(result));
      });
  }

  register(account: Account): Observable<AuthenticationResult> {
    return this.http
      .post(`${API_URL}/authentication/register`, account)
      .map(resp => resp.json())
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
