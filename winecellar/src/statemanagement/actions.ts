import { AuthenticationResult } from '../authentication/types/AuthenticationResult';
import { Wine } from '../stock/types/Wine';

const typeCache: { [label: string]: boolean } = {};
function type<T>(label: T | ''): T {
  // this actually checks whether your action type
  // name is unique!
  if (typeCache[<string> label]) {
    throw new Error(`Action type "${label}" is not unqiue"`);
  }

  typeCache[<string> label] = true;

  return <T> label;
}

// action types
export const ActionTypes = {
  AUTHENTICATION_SET_AUTHENTICATION: 'AUTHENTICATION_SET_AUTHENTICATION',
  AUTHENTICATION_CLEAR_AUTHENTICATION: 'AUTHENTICATION_CLEAR_AUTHENTICATION',
  WINES_ADD: 'WINES_ADD',
  WINES_REMOVE: 'WINES_REMOVE',
  WINES_UPDATE: 'WINES_UPDATE',
  WINES_UPDATE_RATE: 'WINES_UPDATE_RATE',
  WINES_UPDATE_STOCK: 'WINES_UPDATE_STOCK',
  WINES_SET_ALL: 'WINES_SET_ALL',
  APPLICATION_ENABLE_BUSY_FLAG: 'APPLICATION_ENABLE_BUSY_FLAG',
  APPLICATION_DISABLE_BUSY_FLAG: 'APPLICATION_DISABLE_BUSY_FLAG',
  APPLICATION_TOGGLE_SIDEBAR: 'APPLICATION_TOGGLE_SIDEBAR'
};

// typesafe actions
export class SetAuthenticationAction {
  type = ActionTypes.AUTHENTICATION_SET_AUTHENTICATION;
  payload: { authenticationResult: AuthenticationResult };

  constructor(authenticationResult: AuthenticationResult) {
    this.payload = { authenticationResult };
  }
}

export class ClearAuthenticationAction {
  type = ActionTypes.AUTHENTICATION_CLEAR_AUTHENTICATION;
}

export class AddWineAction {
  type = ActionTypes.WINES_ADD;
  payload: { wine: Wine };

  constructor(wine: Wine) {
    this.payload = { wine };
  }
}

export class RemoveWineAction {
  type = ActionTypes.WINES_REMOVE;
  payload: { id: string };

  constructor(id: string) {
    this.payload = { id };
  }
}

export class UpdateWineAction {
  type = ActionTypes.WINES_UPDATE;
  payload: { id: string, wine: Wine };

  constructor(id: string, wine: Wine) {
    this.payload = { id, wine };
  }
}

export class UpdateRateWineAction {
  type = ActionTypes.WINES_UPDATE_RATE;
  payload: { id: string, myRating: number };

  constructor(id: string, myRating: number) {
    this.payload = { id, myRating };
  }
}

export class UpdateStockWineAction {
  type = ActionTypes.WINES_UPDATE_STOCK;
  payload: { id: string, inStock: number };

  constructor(id: string, inStock: number) {
    this.payload = { id, inStock };
  }
}

export class SetAllWinesAction {
  type = ActionTypes.WINES_SET_ALL;
  payload: { wines: Array<Wine> };

  constructor(wines: Array<Wine>) {
    this.payload = { wines };
  }
}

export class EnableBusyFlagAction {
  type = ActionTypes.APPLICATION_ENABLE_BUSY_FLAG;
}

export class DisableBusyFlagAction {
  type = ActionTypes.APPLICATION_DISABLE_BUSY_FLAG;
}

export class ToggleSidebarAction {
  type = ActionTypes.APPLICATION_TOGGLE_SIDEBAR;
}

export type WinecellarActions = SetAuthenticationAction |
  ClearAuthenticationAction |
  AddWineAction |
  RemoveWineAction |
  UpdateWineAction |
  UpdateRateWineAction |
  UpdateStockWineAction |
  SetAllWinesAction |
  EnableBusyFlagAction |
  DisableBusyFlagAction |
  ToggleSidebarAction;
