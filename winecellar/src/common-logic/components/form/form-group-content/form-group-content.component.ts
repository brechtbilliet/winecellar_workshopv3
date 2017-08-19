import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-group-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="form-group has-feedback">
      <label class="col-sm-4 control-label">{{label}}</label>
      <div class="col-sm-8">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class FormGroupContentComponent {
  @Input() label: string;
}
