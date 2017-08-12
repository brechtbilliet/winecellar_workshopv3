import { NgModule } from '@angular/core';
import { AboutPageContainer } from './containers/about/about-page.container';
import { CommonLogicModule } from '../common/common.module';

@NgModule({
  declarations: [
    AboutPageContainer
  ],
  imports: [CommonLogicModule],
  exports: [AboutPageContainer]
})
export class AboutModule {
}
