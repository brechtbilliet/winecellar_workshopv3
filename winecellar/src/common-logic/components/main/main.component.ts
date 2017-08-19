import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main.component.less'],
  template: `
    <ng-content></ng-content>`
})
export class MainComponent {
}
