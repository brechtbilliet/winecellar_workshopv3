import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RatingComponent } from './components/rating/rating.component';
import { PanelComponent } from './components/panel/panel.component';
import { NumberPickerComponent } from './components/number-picker/number-picker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CollapsableSidebarContainer } from './containers/collapsable-sidebar/collapsable-sidebar.container';

@NgModule({
  declarations: [
    DefaultPageComponent,
    MainComponent,
    NavbarComponent,
    NumberPickerComponent,
    PanelComponent,
    RatingComponent,
    SpinnerComponent,
    CollapsableSidebarContainer
  ],
  exports: [
    DefaultPageComponent,
    MainComponent,
    NavbarComponent,
    NumberPickerComponent,
    PanelComponent,
    RatingComponent,
    SpinnerComponent,
    CollapsableSidebarContainer
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class CommonLogicModule {

}
