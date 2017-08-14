import { NgModule } from '@angular/core';
import { StockPageContainer } from './containers/stock-page/stock-page.container';
import { AddStockPageContainer } from './containers/add-stock-page/add-stock-page.container';
import { EditStockPageContainer } from './containers/edit-stock-page/edit-stock-page.container';
import { StockService } from './services/stock.service';
import { CommonLogicModule } from '../common-logic/common-logic.module';
import { RouterModule } from '@angular/router';
import { FavoriteWinesComponent } from './containers/components/favorite-wines/favorite-wines.component';
import { WineResultComponent } from './containers/components/wine-result/wine-result.component';
import { WineResultsComponent } from './containers/components/wine-results/wine-results.component';

@NgModule({
  declarations: [
    StockPageContainer, AddStockPageContainer, EditStockPageContainer,
    FavoriteWinesComponent, WineResultComponent, WineResultsComponent],
  exports: [StockPageContainer, AddStockPageContainer, EditStockPageContainer],
  imports: [CommonLogicModule, RouterModule],
  providers: [StockService]
})
export class StockModule {

}
