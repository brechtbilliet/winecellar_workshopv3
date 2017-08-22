import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationContainer } from './containers/authentication/authentication.container';
import { CommonModule } from '@angular/common';
import { CommonLogicModule } from '../common-logic/common-logic.module';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticatedGuard } from './authenticated.guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationSandbox } from './authentication.sandbox';

@NgModule({
  imports: [HttpClientModule, CommonModule, CommonLogicModule, HttpModule],
  declarations: [LoginComponent, RegisterComponent, AuthenticationContainer],
  providers: [AuthenticationService, AuthenticatedGuard, AuthenticationSandbox]
})
export class AuthenticationModule {

}
