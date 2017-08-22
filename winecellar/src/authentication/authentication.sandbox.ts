import { Injectable } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationResult } from './types/AuthenticationResult';
import { Observable } from 'rxjs/Observable';
import { Credentials } from './types/Credentials';
import { SetAuthenticationAction } from '../statemanagement/actions';
import { WinecellarState } from '../statemanagement/state';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthenticationSandbox {
  constructor(private authenticationService: AuthenticationService, private store: Store<WinecellarState>) {
  }

  authenticate(credentials: Credentials): Observable<AuthenticationResult> {
    return this.authenticationService.authenticate(credentials)
      .do((result: AuthenticationResult) => this.store.dispatch(new SetAuthenticationAction(result)));
  }

  register(account: Account): Observable<AuthenticationResult> {
    return this.authenticationService.register(account)
      .do((result: AuthenticationResult) => this.store.dispatch(new SetAuthenticationAction(result)));
  }
}
