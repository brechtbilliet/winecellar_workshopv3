import { NgModule } from '@angular/core';
import { StockPageContainer } from './containers/stock-page/stock-page.container';
import { AddStockPageContainer } from './containers/add-stock-page/add-stock-page.container';
import { EditStockPageContainer } from './containers/edit-stock-page/edit-stock-page.container';
import { StockService } from './services/stock.service';
import { CommonLogicModule } from '../common-logic/common-logic.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StockPageContainer, AddStockPageContainer, EditStockPageContainer],
  exports: [StockPageContainer, AddStockPageContainer, EditStockPageContainer],
  imports: [CommonModule, CommonLogicModule, RouterModule],
  providers: [StockService]
})
export class StockModule {

}
