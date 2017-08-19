import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationState, WinecellarState } from '../statemanagement/state';
import { Store } from '@ngrx/store';
import { DisableBusyFlagAction, EnableBusyFlagAction } from '../statemanagement/actions';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

@Injectable()
export class WinecellarHttpInterceptor implements HttpInterceptor {
  private activeCalls = 0;

  constructor(private store: Store<WinecellarState>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.httpCallRequested();
    return this.store
      .select(state => state.authentication) // fetch the authentication from the store as a stream
      .take(1) // we don't want this stream to keep on living (take the current value)
      .flatMap((authState: AuthenticationState) => {
        const requestToHandle = authState.isAuthenticated
          ? request.clone({
            headers: request.headers.set('authorization', `Bearer ${authState.jwtToken}`)
          })
          : request;
        return next.handle(requestToHandle);
      })
      .catch(() => {
        alert('Something went terribly wrong!');
        return Observable.empty();
      })
      .finally(() => this.httpCallReady());
  }

  private httpCallReady(): void {
    this.activeCalls--;
    if (this.activeCalls === 0) {
      this.store.dispatch(new DisableBusyFlagAction());
    }
  }

  private httpCallRequested(): void {
    if (this.activeCalls === 0) {
      this.store.dispatch(new EnableBusyFlagAction());
    }
    this.activeCalls++;
  }
}
