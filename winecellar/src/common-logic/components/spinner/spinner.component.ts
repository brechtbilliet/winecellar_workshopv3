import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  styleUrls: ['./spinner.component.less'],
  template: `
    <div class="spinner active">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>`
})
export class SpinnerComponent {
}
