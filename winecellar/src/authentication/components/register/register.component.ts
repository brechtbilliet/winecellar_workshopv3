import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../../types/Account';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./register.component.less'],
  template: `
    <form [formGroup]="registerForm" class="form-horizontal">
      <app-form-group-textbox [label]="'First name (*)'" [control]="registerForm.controls['firstName']"
                              [placeholder]="'Enter first name'">
      </app-form-group-textbox>
      <app-form-group-textbox [label]="'Last name (*)'" [control]="registerForm.controls['lastName']"
                              [placeholder]="'Enter last name'">
      </app-form-group-textbox>
      <app-form-group-textbox [label]="'Login (*)'" [control]="registerForm.controls['login']"
                              [placeholder]="'Enter login'">
      </app-form-group-textbox>
      <app-form-group-password [label]="'Password (*)'" [control]="registerForm.controls['password']"
                               [placeholder]="'Enter password'">
      </app-form-group-password>
      <app-form-group-password [label]="'Confirm password (*)'" [control]="registerForm.controls['confirmPassword']"
                               [placeholder]="'Confirm your password'">
      </app-form-group-password>
      <app-form-group-footer>
        <button type="submit" [disabled]="!registerForm.valid"
                class="btn btn-primary btn-block btn-lg" (click)="onSubmit()">
          <i class="fa fa-user"></i>&nbsp;Sign up
        </button>
      </app-form-group-footer>
    </form>
  `
})
export class RegisterComponent {
  @Output() authenticate = new EventEmitter<Account>();

  registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    login: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      alert('Passwords don\'t match');
    } else {
      this.authenticate.emit(this.registerForm.value);
    }
  }
}
