import { Component } from '@angular/core';

@Component({
  selector: 'app-wine-results',
  template: `
    <table class="table table-striped">
      <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Region</th>
        <th>In stock</th>
        <th>Price</th>
        <th>Rating</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr wineResult [wine]="null">
      </tr>
      <tr>
        <td colspan="7">You haven't added any wines yet</td>
      </tr>
      </tbody>
    </table>
  `
})
export class WineResultsComponent {

}
