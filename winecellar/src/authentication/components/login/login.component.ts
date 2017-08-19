import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Credentials } from '../../types/Credentials';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.less'],
  template: `
    <form [formGroup]="loginForm" class="form-horizontal">
      <app-form-group-textbox [label]="'Login (*)'"
                          [control]="loginForm.controls['login']" [placeholder]="'Enter login'">
      </app-form-group-textbox>
      <app-form-group-password [label]="'Password (*)'" [control]="loginForm.controls['password']"
                           [placeholder]="'Enter password'">
      </app-form-group-password>
      <app-form-group-footer>
        <button type="submit" [disabled]="!loginForm.valid" (click)="onSubmit()" class="btn btn-primary btn-block btn-lg">
          <i class="fa fa-sign-in"></i>&nbsp;Sign in
        </button>
      </app-form-group-footer>
    </form>
  `
})
export class LoginComponent {
  @Output() authenticate = new EventEmitter<Credentials>();

  loginForm = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    this.authenticate.emit(this.loginForm.value);
  }
}
