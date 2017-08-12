import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './containers/app/app.component';
import { StockModule } from '../stock/stock.module';
import { AboutModule } from '../about/about.module';
import { appRoutes } from './app.routes';
import { CommonModule } from '../common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockModule,
    AboutModule,
    CommonModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
