import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Wine } from '../../types/Wine';

@Component({
  selector: '[wineResult]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <td><img src="{{wine.image}}"></td>
    <td>{{wine.name}}</td>
    <td>{{wine.region}}</td>
    <td style="min-width:80px;">
      <app-number-picker [amount]="wine.inStock" (setAmount)="onSetStock($event)"></app-number-picker>
    </td>
    <td>{{wine.price}}</td>
    <td>
      <app-rating [big]="true" [rating]="wine.myRating" (setRate)="onSetRate($event)"></app-rating>
    </td>
    <td>
      <div class="pull-right">
        <div class="btn-group">
          <a class="btn btn-lg btn-primary" [routerLink]="['/stock', wine._id]">
            <i class="fa fa-pencil"></i>
          </a>
          <button class="btn btn-lg btn-danger" (click)="onRemove(wine)"><i class="fa fa-trash-o"></i></button>
        </div>
      </div>
    </td>
  `
})
export class WineResultComponent {
  @Input() wine: Wine;

  @Output() remove = new EventEmitter();
  @Output() setRate = new EventEmitter<number>();
  @Output() setStock = new EventEmitter<number>();

  onSetRate(value: number): void {
    this.setRate.emit(value);
  }

  onSetStock(value: number): void {
    this.setStock.emit(value);
  }

  onRemove(): void {
    this.remove.emit(null);
  }
}
