import { RouterModule } from '@angular/router';
import { AddStockPageContainer } from '../stock/containers/add-stock-page/add-stock-page.container';
import { StockPageContainer } from '../stock/containers/stock-page/stock-page.container';
import { EditStockPageContainer } from '../stock/containers/edit-stock-page/edit-stock-page.container';
import { AboutPageContainer } from '../about/containers/about/about-page.container';
import { AuthenticationContainer } from '../authentication/containers/authentication/authentication.container';
import { AuthenticatedGuard } from '../authentication/authenticated.guard';

const routes = [
  { path: '', redirectTo: '/stock', pathMatch: 'full' },
  { path: 'about', component: AboutPageContainer, canActivate: [AuthenticatedGuard] },
  { path: 'stock', component: StockPageContainer, canActivate: [AuthenticatedGuard] },
  { path: 'stock/add', component: AddStockPageContainer, canActivate: [AuthenticatedGuard] },
  { path: 'stock/:id', component: EditStockPageContainer, canActivate: [AuthenticatedGuard] },
  { path: 'authentication', component: AuthenticationContainer }
];

export const appRoutes = RouterModule.forRoot(routes);
