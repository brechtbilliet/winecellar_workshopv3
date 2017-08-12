import { NgModule } from '@angular/core';
import { AboutPageContainer } from './containers/about/about-page.container';
import { CommonModule } from '../common/common.module';

@NgModule({
  declarations: [
    AboutPageContainer
  ],
  imports: [CommonModule],
  exports: [AboutPageContainer]
})
export class AboutModule {
}
