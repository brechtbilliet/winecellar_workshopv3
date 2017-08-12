import { NgModule } from '@angular/core';
import { StockPageContainer } from './containers/stock-page/stock-page.container';
import { AddStockPageContainer } from './containers/add-stock-page/add-stock-page.container';
import { EditStockPageContainer } from './containers/edit-stock-page/edit-stock-page.container';
import { StockService } from './services/stock.service';
import { CommonModule } from '../common/common.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StockPageContainer, AddStockPageContainer, EditStockPageContainer],
  exports: [StockPageContainer, AddStockPageContainer, EditStockPageContainer],
  imports: [CommonModule, RouterModule],
  providers: [StockService]
})
export class StockModule {

}
