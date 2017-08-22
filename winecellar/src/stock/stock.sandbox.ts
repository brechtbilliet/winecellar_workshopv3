import { Injectable } from '@angular/core';
import { WinecellarState } from '../statemanagement/state';
import { Store } from '@ngrx/store';
import { StockService } from './services/stock.service';
import { Observable } from 'rxjs/Observable';
import {
  AddWineAction,
  RemoveWineAction,
  UpdateRateWineAction,
  UpdateStockWineAction,
  UpdateWineAction
} from '../statemanagement/actions';
import { Wine } from './types/Wine';
import { WineComSearchResult, WineComService } from './services/wine-com.service';

@Injectable()
export class StockSandbox {
  wines$ = this.store.select(state => state.wines);
  isAuthentiated$ = this.store.select(state => state.authentication.isAuthenticated);

  constructor(private store: Store<WinecellarState>, private stockService: StockService, private winecomService: WineComService) {
  }

  addWine(wine: Wine): void {
    this.stockService.add(wine)
      .subscribe((resp: Wine) => this.store.dispatch(new AddWineAction(resp)));
  }

  updateWine(_id: string, wine: Wine): void {
    this.stockService.update(_id, wine)
      .subscribe((resp: Wine) => this.store.dispatch(new UpdateWineAction(_id, wine)));
  }

  removeWine(wine: Wine): void {
    this.stockService.remove(wine)
      .subscribe(() => this.store.dispatch(new RemoveWineAction(wine._id)));
  }

  fetchWine(id: string): Observable<Wine> {
    return this.stockService.fetchWine(id);
  }

  setRate(wine: Wine, myRating: number): void {
    this.stockService.setRate(wine, myRating)
      .subscribe(() => this.store.dispatch(new UpdateRateWineAction(wine._id, myRating)));
  }

  setStock(wine: Wine, inStock: number): void {
    this.stockService.setStock(wine, inStock)
      .subscribe(() => this.store.dispatch(new UpdateStockWineAction(wine._id, inStock)));
  }

  search(query: string): Observable<WineComSearchResult> {
    return this.winecomService.search(query);
  }
}
