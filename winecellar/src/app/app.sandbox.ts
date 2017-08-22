import { Injectable } from '@angular/core';
import { WinecellarState } from '../statemanagement/state';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '../authentication/services/authentication.service';
import { StockService } from '../stock/services/stock.service';
import { ClearAuthenticationAction, SetAllWinesAction, SetAuthenticationAction } from '../statemanagement/actions';
import { Wine } from '../stock/types/Wine';

@Injectable()
export class AppSandbox {
  authenticated$ = this.store.select(state => state.authentication.isAuthenticated);
  isBusy$ = this.store.select(state => state.application.isBusy);
  account$ = this.store.select(state => state.authentication.account);

  constructor(private store: Store<WinecellarState>,
              private authenticationService: AuthenticationService,
              private stockService: StockService) {
  }

  logout(): void {
    this.authenticationService.logout();
    this.store.dispatch(new ClearAuthenticationAction());
  }

  fetchAll(): void {
    this.stockService.fetchAll().subscribe((resp: Wine[]) => {
      this.store.dispatch(new SetAllWinesAction(resp));
    });

  }

  checkInitialAuthentication(): void {
    const localStorageObj = this.authenticationService.checkInitialAuthentication();
    if (localStorageObj) {
      this.store.dispatch(new SetAuthenticationAction(JSON.parse(localStorageObj)));
    }
  }
}
