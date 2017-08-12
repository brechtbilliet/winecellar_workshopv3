import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello world</h1>
    <ul>
      <li><a routerLink="about">About</a></li>
      <li><a routerLink="stock">stock</a></li>
      <li><a routerLink="stock/add">Add</a></li>
      <li><a routerLink="stock/fake">Edit</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
}
