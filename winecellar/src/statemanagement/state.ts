import { Wine } from '../stock/types/Wine';
import { Account } from '../authentication/types/Account';

export interface WinecellarState {
  readonly wines: Wine[];
  readonly authentication: AuthenticationState;
  readonly application: ApplicationState;
}

export interface ApplicationState {
  readonly sidebarCollapsed: boolean;
  readonly isBusy: boolean;
}

export interface AuthenticationState {
  readonly isAuthenticated: boolean;
  readonly jwtToken: string;
  readonly account: Account;
}
