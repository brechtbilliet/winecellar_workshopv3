import { NgModule } from '@angular/core';
import { StockPageContainer } from './containers/stock-page/stock-page.container';
import { AddStockPageContainer } from './containers/add-stock-page/add-stock-page.container';
import { EditStockPageContainer } from './containers/edit-stock-page/edit-stock-page.container';

@NgModule({
  declarations: [StockPageContainer, AddStockPageContainer, EditStockPageContainer],
  exports: [StockPageContainer, AddStockPageContainer, EditStockPageContainer]
})
export class StockModule {

}
