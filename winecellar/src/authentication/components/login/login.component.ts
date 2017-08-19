import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Credentials } from '../../types/Credentials';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.less'],
  template: `
    <button (click)="onLogin()">Login</button>
  `
})
export class LoginComponent {
  @Output() authenticate = new EventEmitter<Credentials>();

  onLogin(): void {
    this.authenticate.emit({
      login: 'johndoe',
      password: 'testtest'
    });
  }
}
