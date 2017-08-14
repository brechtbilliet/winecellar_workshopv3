import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-wines',
  styleUrls: ['./favorite-wines.component.less'],
  template: `
    <div>
      <h2><i class="fa fa-star"></i>&nbsp;Favorites</h2>
      <table class="table table-striped">
        <tbody>
        <tr>
          <td style="min-width:70px;">
            <app-number-picker></app-number-picker>
          </td>
          <td style="max-width: 200px;">fakename</td>
          <td>0/5</td>
        </tr>
        </tbody>
      </table>
    </div>
  `
})
export class FavoriteWinesComponent {
}
