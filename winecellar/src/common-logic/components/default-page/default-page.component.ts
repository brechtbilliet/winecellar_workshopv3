import { Component } from '@angular/core';

@Component({
  selector: 'app-default-page',
  styleUrls: ['./default-page.component.less'],
  template: `
    <ng-content></ng-content>`
})
export class DefaultPageComponent {
}
