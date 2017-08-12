import { Wine } from '../stock/types/Wine';

export interface WinecellarState {
  application: ApplicationState;
  data: {
    wines: Wine[],
    authentication: AuthenticationState
  };
}

export interface ApplicationState {
  sidebarCollapsed: boolean;
  isBusy: boolean;
}

export interface AuthenticationState {
  isAuthenticated: boolean;
  jwtToken: string;
  account: Account;
}
