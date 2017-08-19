import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { WinecellarState } from '../../../statemanagement/state';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <app-navbar (logout)="onLogout()" [account]="account$|async" *ngIf="authenticated$|async"></app-navbar>
    <router-outlet></router-outlet>
    <app-spinner [spin]="true"></app-spinner>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  authenticated$ = this.store.select(state => state.authentication.isAuthenticated);
  account$ = this.store.select(state => state.authentication.account);

  constructor(private router: Router, private authenticationService: AuthenticationService, private store: Store<WinecellarState>) {
    this.authenticationService.checkInitialAuthentication();
  }

  onLogout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/authentication']);
  }
}
