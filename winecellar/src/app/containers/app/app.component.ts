import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { WinecellarState } from '../../../statemanagement/state';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <app-navbar (logout)="onLogout()" *ngIf="authenticated"></app-navbar>
    <router-outlet></router-outlet>
    <app-spinner [spin]="true"></app-spinner>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy {
  authenticated = false;

  private subscriptions = [];

  constructor(private router: Router, private authenticationService: AuthenticationService, private store: Store<WinecellarState>) {
    this.authenticationService.checkInitialAuthentication();
    this.subscriptions.push(this.store.subscribe((state) => {
      this.authenticated = state.authentication.isAuthenticated;
    }));
  }

  onLogout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/authentication']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
