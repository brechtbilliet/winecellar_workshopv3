import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './containers/app/app.component';
import { StockModule } from '../stock/stock.module';
import { AboutModule } from '../about/about.module';
import { appRoutes } from './app.routes';
import { CommonLogicModule } from '../common-logic/common-logic.module';
import { rootReducer } from '../statemanagement/root.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthenticationModule } from '../authentication/authentication.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WinecellarHttpInterceptor } from './winecellar-http.interceptor';
import { AppSandbox } from './app.sandbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument(),
    BrowserModule,
    StockModule,
    AboutModule,
    CommonLogicModule,
    AuthenticationModule,
    appRoutes
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: WinecellarHttpInterceptor, multi: true
  }, AppSandbox],
  bootstrap: [AppComponent]
})
export class AppModule {
}
