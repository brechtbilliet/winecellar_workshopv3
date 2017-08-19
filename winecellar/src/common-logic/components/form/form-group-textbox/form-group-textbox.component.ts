import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group-textbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="form-group has-feedback" [class.has-success]="control.valid && control.dirty">
      <label class="col-sm-4 control-label">{{label}}</label>
      <div class="col-sm-8">
        <input type="text"
               [formControl]="control"
               class="form-control input-lg"
               placeholder="{{placeholder}}"/>
        <span *ngIf="control.valid && control.dirty"
              class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
      </div>
    </div>
  `
})
export class FormGroupTextboxComponent {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() placeholder: string;
}
