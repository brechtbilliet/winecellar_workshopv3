import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationContainer } from './containers/authentication/authentication.container';
import { CommonModule } from '@angular/common';
import { CommonLogicModule } from '../common-logic/common-logic.module';

@NgModule({
  imports: [CommonModule, CommonLogicModule],
  declarations: [LoginComponent, RegisterComponent, AuthenticationContainer]
})
export class AuthenticationModule {

}
