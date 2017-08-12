import { Component } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-page',
  template: `
    <h1>Stock index</h1>
  `
})
export class StockPageContainer {
  constructor(private stockService: StockService) {
    this.stockService.foo();
  }
}
