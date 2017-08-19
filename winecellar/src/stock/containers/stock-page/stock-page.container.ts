import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { WinecellarState } from '../../../statemanagement/state';
import { Store } from '@ngrx/store';
import { Wine } from '../../types/Wine';
import 'rxjs/add/operator/combineLatest';
import { StockService } from '../../services/stock.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-stock-page',
  template: `
    <app-default-page>
      <app-collapsable-sidebar class="hidden-sm hidden-xs">
        <app-favorite-wines (setStock)="onSetStock($event)" [wines]="favoriteWines$ | async">
        </app-favorite-wines>
      </app-collapsable-sidebar>
      <app-main>
        <div class="row">
          <div class="col-sm-8">
            <div class="input-group">
              <input type="text" class="form-control input-lg" (keyup)="term$.next($event.target.value)"/>
              <span class="input-group-addon"><i class="fa fa-search"></i></span>
            </div>
          </div>
          <div class="col-sm-4">
            <a class="btn btn-primary btn-lg btn-block" [routerLink]="['/stock/add']">
              <i class="fa fa-plus-circle"></i>&nbsp;Add
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <h2>
              <i class="fa fa-user"></i>&nbsp;My wines
              <span class="badge badge-primary">{{numberOfWines$ | async}}</span>
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <app-wine-results [wines]="filteredWines$|async"
                              (remove)="onRemove($event)"
                              (setRate)="onSetRate($event)"
                              (setStock)="onSetStock($event)">
            </app-wine-results>
          </div>
        </div>
      </app-main>
    </app-default-page>
  `
})
export class StockPageContainer {
  term$ = new BehaviorSubject('');
  wines$ = this.store.select(state => state.wines);
  favoriteWines$ = this.wines$.map(wines => _.orderBy(wines, ['myRating'], ['desc']));
  numberOfWines$ = this.wines$.map(wines => _.sumBy(wines, (wine) => wine.inStock));
  filteredWines$ = this.term$.combineLatest(this.wines$,
    (term: string, wines: Wine[]) => {
      return wines.filter(wine => wine.name.toLowerCase().indexOf(term) > -1);
    });

  constructor(private store: Store<WinecellarState>, private stockService: StockService) {

  }

  onRemove(wine: Wine): void {
    this.stockService.remove(wine);
  }

  onSetRate(item: { wine: Wine, value: number }): void {
    this.stockService.setRate(item.wine, item.value);
  }

  onSetStock(item: { wine: Wine, value: number }): void {
    this.stockService.setStock(item.wine, item.value);
  }
}
