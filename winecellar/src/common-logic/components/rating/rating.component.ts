import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./rating.component.less'],
  template: `
    <i class="fa fa-star rating" [class.fa-2x]="big"
       *ngFor="let i of stars"
       [class.over]="overValue >= i"
       [class.starred]="rating >= i"
       (mouseover)="over(i)"
       (mouseout)="out()"
       (click)="update(i)"></i>
  `
})
export class RatingComponent {
  @Input() rating: number;
  @Input() big: boolean;
  @Output() setRate = new EventEmitter<number>();

  stars = [1, 2, 3, 4, 5];

  overValue: number;

  update(value: number): void {
    this.setRate.emit(value);
  }

  over(value: number): void {
    this.overValue = value;
  }

  out(): void {
    this.overValue = 0;
  }
}
