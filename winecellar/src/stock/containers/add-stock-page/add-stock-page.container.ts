import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wine } from '../../types/Wine';
import { StockSandbox } from '../../stock.sandbox';

@Component({
  selector: 'app-add-stock-page',
  template: `
    <app-default-page>
      <app-main>
        <div class="row">
          <div class="col-sm-12">
            <h1><i class="fa fa-plus-circle"></i>&nbsp;Add wine</h1>
          </div>
        </div>
        <div class="row">
          <app-detail-wine-form (onSave)="onSave($event)"></app-detail-wine-form>
        </div>
      </app-main>
    </app-default-page>
  `
})
export class AddStockPageContainer {
  constructor(private sb: StockSandbox,
              private router: Router) {
  }

  onSave(wine: Wine): void {
    this.sb.addWine(wine);
    this.router.navigate(['/stock']);
  }
}
