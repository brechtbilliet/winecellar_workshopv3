import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wine } from '../../types/Wine';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/publishReplay';
import { StockSandbox } from '../../stock.sandbox';

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

  editWine$ = this.sb.isAuthentiated$
    .filter(isAuthenticated => !!isAuthenticated) // only when authenticated
    .flatMap(() => this.sb.fetchWine(this.id))
    .filter(res => !!res)
    .publishReplay();

  constructor(private sb: StockSandbox,
              private route: ActivatedRoute,
              private router: Router) {
    this.editWine$.connect();
  }

  onSave(wine: Wine): void {
    this.sb.updateWine(this.id, wine);
    this.router.navigate(['/stock']);
  }
}
