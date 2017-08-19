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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupContentComponent } from './components/form/form-group-content/form-group-content.component';
import { FormGroupFooterComponent } from './components/form/form-group-footer/form-group-footer.component';
import { FormGroupPasswordComponent } from './components/form/form-group-password/form-group-password.component';
import { FormGroupTextareaComponent } from './components/form/form-group-textarea/form-group-textarea.component';
import { FormGroupTextboxComponent } from './components/form/form-group-textbox/form-group-textbox.component';

@NgModule({
  declarations: [
    DefaultPageComponent,
    MainComponent,
    NavbarComponent,
    NumberPickerComponent,
    PanelComponent,
    RatingComponent,
    SpinnerComponent,
    CollapsableSidebarContainer,
    FormGroupContentComponent,
    FormGroupFooterComponent,
    FormGroupPasswordComponent,
    FormGroupTextareaComponent,
    FormGroupTextboxComponent
  ],
  exports: [
    DefaultPageComponent,
    MainComponent,
    NavbarComponent,
    NumberPickerComponent,
    PanelComponent,
    RatingComponent,
    SpinnerComponent,
    CollapsableSidebarContainer,
    FormGroupContentComponent,
    FormGroupFooterComponent,
    FormGroupPasswordComponent,
    FormGroupTextareaComponent,
    FormGroupTextboxComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommonLogicModule {

}
