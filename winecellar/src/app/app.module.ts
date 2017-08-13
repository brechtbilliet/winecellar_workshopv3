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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
