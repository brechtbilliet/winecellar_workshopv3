import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { WinecellarState } from '../../../statemanagement/state';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { StockService } from '../../../stock/services/stock.service';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <app-navbar (logout)="onLogout()" [account]="account$|async" *ngIf="authenticated$|async"></app-navbar>
    <router-outlet></router-outlet>
    <app-spinner [spin]="isBusy$|async"></app-spinner>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  authenticated$ = this.store.select(state => state.authentication.isAuthenticated);
  isBusy$ = this.store.select(state => state.application.isBusy);
  account$ = this.store.select(state => state.authentication.account);

  constructor(private router: Router, private authenticationService: AuthenticationService,
              private store: Store<WinecellarState>, private stockService: StockService) {
    this.authenticationService.checkInitialAuthentication();
    this.authenticated$
      .filter(item => item)
      .subscribe(() => {
        this.stockService.fetchAll();
      });
  }

  onLogout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/authentication']);
  }
}
