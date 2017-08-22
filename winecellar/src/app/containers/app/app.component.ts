import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { AppSandbox } from '../../app.sandbox';

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
  authenticated$ = this.sb.authenticated$;
  isBusy$ = this.sb.isBusy$;
  account$ = this.sb.account$;

  constructor(private router: Router, private sb: AppSandbox) {
    this.sb.checkInitialAuthentication();
    this.authenticated$
      .filter(item => item)
      .subscribe(() => {
        this.sb.fetchAll();
      });
  }

  onLogout(): void {
    this.sb.logout();
    this.router.navigate(['/authentication']);
  }
}
