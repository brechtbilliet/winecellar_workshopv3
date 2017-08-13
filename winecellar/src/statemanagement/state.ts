import { Wine } from '../stock/types/Wine';

export interface WinecellarState {
  readonly application: ApplicationState;
  readonly data: {
    readonly wines: Wine[],
    readonly authentication: AuthenticationState
  };
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
