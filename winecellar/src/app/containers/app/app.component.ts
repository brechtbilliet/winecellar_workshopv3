import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-spinner [spin]="true"></app-spinner>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
}
