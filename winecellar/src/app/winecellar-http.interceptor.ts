import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WinecellarState } from '../statemanagement/state';
import { Store } from '@ngrx/store';
import { DisableBusyFlagAction, EnableBusyFlagAction } from '../statemanagement/actions';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/finally';

@Injectable()
export class WinecellarHttpInterceptor implements HttpInterceptor {
  private activeCalls = 0;

  constructor(private store: Store<WinecellarState>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.httpCallRequested();
    return next
      .handle(request)
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
