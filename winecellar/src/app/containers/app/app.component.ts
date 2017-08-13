import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { WinecellarState } from '../../../statemanagement/state';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <app-navbar (logout)="onLogout()"></app-navbar>
    <router-outlet></router-outlet>
    <app-spinner [spin]="true"></app-spinner>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private router: Router, private authenticationService: AuthenticationService, private store: Store<WinecellarState>) {
    this.store.subscribe((state) => {
      console.log(state);
    });
  }

  onLogout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/authentication']);
  }
}
