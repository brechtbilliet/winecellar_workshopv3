import { Component } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-page',
  template: `
    <app-default-page>
      <app-main>
        <div class="row">
          <div class="col-sm-8">
            <div class="input-group">
              <input type="text" class="form-control input-lg"/>
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
              <span class="badge badge-primary">500</span>
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <app-panel>
              <app-number-picker></app-number-picker>
              <app-rating></app-rating>
              <app-spinner></app-spinner>
            </app-panel>
          </div>
        </div>
      </app-main>
    </app-default-page>
  `
})
export class StockPageContainer {
  constructor(private stockService: StockService) {
    this.stockService.foo();
  }
}
