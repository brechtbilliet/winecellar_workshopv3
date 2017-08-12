import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  styleUrls: ['./panel.component.less'],
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">my header</h3>
      </div>
      <div class="panel-body">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class PanelComponent {
}
