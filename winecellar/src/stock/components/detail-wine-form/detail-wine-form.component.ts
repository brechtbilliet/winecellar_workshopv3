import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Wine } from '../../types/Wine';

@Component({
  selector: 'app-detail-wine-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form [formGroup]="wineForm" class="form-horizontal col-sm-12" (ngSubmit)="onSubmit()">
      <app-form-group-textbox [label]="'Name'" [placeholder]="'Enter name'"
                              [control]="wineForm.controls['name']"></app-form-group-textbox>
      <app-form-group-textarea [label]="'Description'" [control]="wineForm.controls['description']"
                               [placeholder]="'Enter description'">
      </app-form-group-textarea>
      <app-form-group-textbox [label]="'Region'" [control]="wineForm.controls['region']" [placeholder]="'Enter region'">
      </app-form-group-textbox>
      <app-form-group-textbox [label]="'Price'" [control]="wineForm.controls['price']" [placeholder]="'Enter price'">
      </app-form-group-textbox>
      <app-form-group-content [label]="'Rating'">
        <app-rating [big]="true" [rating]="wine?.myRating" (setRate)="setRate($event)"></app-rating>
      </app-form-group-content>
      <app-form-group-content [label]="'Number in stock'">
        <app-number-picker [amount]="wine?.inStock" (setAmount)="setInStock($event)"></app-number-picker>
      </app-form-group-content>
      <div class="app-form-group has-feedback">
        <div class=" col-sm-offset-4 col-sm-8"><img src="{{wine?.image}}" alt=""/></div>
      </div>
      <app-form-group-footer>
        <button type="submit" [disabled]="!wineForm.valid" class="btn btn-primary btn-lg">
          <i class="fa fa-save"></i>&nbsp;Save wine
        </button>
        <a [routerLink]="['/stock']" class="btn btn-warning btn-lg"><i class="fa fa-undo"></i>&nbsp;Cancel</a>
      </app-form-group-footer>
    </form>
  `
})
export class DetailWineFormComponent implements OnChanges {
  @Input() wine = new Wine(); // when adding, create a new wine
  @Output() onSave = new EventEmitter<Wine>();

  constructor(private formBuilder: FormBuilder) {
    this.wineForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      region: [],
      price: []
    });
  }

  wineForm: FormGroup;

  ngOnChanges(): void {
    if (this.wine) {
      const { name, description, region, price } = this.wine;
      this.wineForm.patchValue({ name, description, region, price });
    }
  }

  onSubmit(): void {
    this.onSave.emit({ ...this.wine, ...this.wineForm.value });
  }

  setRate(myRating: number): void {
    this.wine = { ...this.wine, myRating };
  }

  setInStock(inStock: number): void {
    this.wine = { ...this.wine, inStock };
  }
}
