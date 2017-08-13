import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../../types/Account';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.less'],
  template: `
    <button (click)="onRegister()">Register</button>
  `
})
export class RegisterComponent {
  @Output() authenticate = new EventEmitter<Account>();

  onRegister(): void {
    this.authenticate.emit({
      login: 'johndoe',
      password: 'testtest',
      lastName: 'Doe',
      firstName: 'John'
    });
  }
}
