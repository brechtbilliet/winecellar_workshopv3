import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RatingComponent } from './components/rating/rating.component';
import { PanelComponent } from './components/panel/panel.component';
import { NumberPickerComponent } from './components/number-picker/number-picker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DefaultPageComponent,
    MainComponent,
    NavbarComponent,
    NumberPickerComponent,
    PanelComponent,
    RatingComponent,
    SpinnerComponent
  ],
  exports: [
    DefaultPageComponent,
    MainComponent,
    NavbarComponent,
    NumberPickerComponent,
    PanelComponent,
    RatingComponent,
    SpinnerComponent
  ],
  imports: [
    RouterModule
  ]
})
export class CommonModule {

}
