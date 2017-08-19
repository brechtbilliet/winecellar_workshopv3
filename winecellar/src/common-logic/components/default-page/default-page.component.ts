import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-default-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./default-page.component.less'],
  template: `
    <ng-content></ng-content>`
})
export class DefaultPageComponent {
}
