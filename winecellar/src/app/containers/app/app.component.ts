import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello world</h1>
    <app-add-stock-page></app-add-stock-page>
    <app-edit-stock-page></app-edit-stock-page>
    <app-stock-page></app-stock-page>
    <app-about-page></app-about-page>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
}
