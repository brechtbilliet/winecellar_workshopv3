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
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
