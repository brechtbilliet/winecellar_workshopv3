import { Injectable } from '@angular/core';
import { WinecellarState } from '../../statemanagement/state';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Wine } from '../types/Wine';
import { API_URL } from '../../configuration';
import {
  AddWineAction,
  RemoveWineAction,
  SetAllWinesAction,
  UpdateRateWineAction,
  UpdateStockWineAction,
  UpdateWineAction
} from '../../statemanagement/actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockService {
  constructor(private store: Store<WinecellarState>, private httpClient: HttpClient) {
  }

  add(wine: Wine): void {
    this.httpClient
      .post(`${API_URL}/wines`, wine)
      .subscribe((resp: Wine) => this.store.dispatch(new AddWineAction(resp)));
  }

  update(_id: string, wine: Wine): void {
    this.httpClient
      .put(`${API_URL}/wines/${_id}`, wine)
      .subscribe((resp: Wine) => this.store.dispatch(new UpdateWineAction(_id, wine)));
  }

  remove(wine: Wine): void {
    this.httpClient
      .delete(`${API_URL}/wines/${wine._id}`)
      .subscribe(() => this.store.dispatch(new RemoveWineAction(wine._id)));
  }

  fetchAll(): void {
    this.httpClient
      .get(`${API_URL}/wines`)
      .subscribe((resp: Wine[]) => this.store.dispatch(new SetAllWinesAction(resp)));
  }

  fetchWine(id: string): Observable<Wine> {
    return this.httpClient.get(`${API_URL}/wines/${id}`);
  }

  setRate(wine: Wine, myRating: number): void {
    const newWine = { ...wine, myRating };
    this.httpClient
      .put(`${API_URL}/wines/${wine._id}`, newWine)
      .subscribe(() => this.store.dispatch(new UpdateRateWineAction(wine._id, myRating)));
  }

  setStock(wine: Wine, inStock: number): void {
    const newWine = { ...wine, inStock };
    this.httpClient
      .put(`${API_URL}/wines/${wine._id}`, newWine)
      .subscribe(() => this.store.dispatch(new UpdateStockWineAction(wine._id, inStock)));
  }
}
