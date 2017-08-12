import { RouterModule } from '@angular/router';
import { AddStockPageContainer } from '../stock/containers/add-stock-page/add-stock-page.container';
import { StockPageContainer } from '../stock/containers/stock-page/stock-page.container';
import { EditStockPageContainer } from '../stock/containers/edit-stock-page/edit-stock-page.container';
import { AboutPageContainer } from '../about/containers/about/about-page.container';

const routes = [
  { path: '', redirectTo: '/stock', pathMatch: 'full' },
  {path: 'about', component: AboutPageContainer},
  {path: 'stock', component: StockPageContainer},
  {path: 'stock/add', component: AddStockPageContainer},
  {path: 'stock/:id', component: EditStockPageContainer},
];

export const appRoutes = RouterModule.forRoot(routes);
