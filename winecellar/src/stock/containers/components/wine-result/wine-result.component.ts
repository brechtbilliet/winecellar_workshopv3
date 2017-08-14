import { Component, Input } from '@angular/core';
import { Wine } from '../../../types/Wine';

@Component({
  selector: '[wineResult]',
  template: `
    <td><img></td>
    <td>fake name</td>
    <td>fake region</td>
    <td style="min-width:80px;">
      <app-number-picker></app-number-picker>
    </td>
    <td>50 eur</td>
    <td>
      <app-rating></app-rating>
    </td>
    <td>
      <div class="pull-right">
        <div class="btn-group">
          <a class="btn btn-lg btn-primary" [routerLink]="['/stock/fake']">
            <i class="fa fa-pencil"></i>
          </a>
          <button class="btn btn-lg btn-danger"><i class="fa fa-trash-o"></i></button>
        </div>
      </div>
    </td>
  `
})
export class WineResultComponent {
  @Input() wine: Wine;
}
