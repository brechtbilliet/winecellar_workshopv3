import { Component } from '@angular/core';
import { Credentials } from '../../types/Credentials';

@Component({
  selector: 'app-authentication',
  template: `
    <div class="container">
      <app-panel [header]="'You are not authenticated!'">
        <app-login *ngIf="curTab === 0" (authenticate)="login($event)"></app-login>
        <app-register *ngIf="curTab === 1" (authenticate)="register($event)"></app-register>
        <a href="javascript:void(0)" (click)="enableTab(1)" *ngIf="curTab === 0">I don't have an account yet</a>
        <a href="javascript:void(0)" (click)="enableTab(0)" *ngIf="curTab === 1">I have an account already</a>
      </app-panel>
    </div>
  `
})
export class AuthenticationContainer {
  curTab = 0;

  enableTab(tabIndex: number): void {
    this.curTab = tabIndex;
  }

  login(credentials: Credentials): void {
    console.log('login with: ', credentials);
  }

  register(account: Account): void {
    console.log('register with: ', account);
  }
}
