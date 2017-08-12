import { NgModule } from '@angular/core';
import { AboutPageContainer } from './containers/about/about-page.container';

@NgModule({
  declarations: [
    AboutPageContainer
  ],
  exports: [AboutPageContainer]
})
export class AboutModule {
}
