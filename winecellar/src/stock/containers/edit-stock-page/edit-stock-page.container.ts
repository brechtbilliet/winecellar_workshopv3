import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { WinecellarState } from '../../../statemanagement/state';
import { StockService } from '../../services/stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Wine } from '../../types/Wine';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/publishReplay';

@Component({
  selector: 'app-edit-stock-page',
  template: `
    <app-default-page>
      <app-main>
        <div class="row">
          <div class="col-sm-12">
            <h1><i class="fa fa-pencil"></i>&nbsp;Edit wine</h1>
          </div>
        </div>
        <div class="row">
          <app-detail-wine-form [wine]="editWine$|async" (onSave)="onSave($event)"></app-detail-wine-form>
        </div>
      </app-main>
    </app-default-page>
  `
})
export class EditStockPageContainer {
  id = this.route.snapshot.params['id'];

  editWine$ = this.store.select(state => state.authentication.isAuthenticated)
    .filter(isAuthenticated => !!isAuthenticated) // only when authenticated
    .flatMap(() => this.stockService.fetchWine(this.id))
    .filter(res => !!res)
    .publishReplay();

  constructor(public store: Store<WinecellarState>,
              private stockService: StockService,
              private route: ActivatedRoute,
              private router: Router) {
    this.editWine$.connect();
  }

  onSave(wine: Wine): void {
    this.stockService.update(this.id, wine);
    this.router.navigate(['/stock']);
  }
}
