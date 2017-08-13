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
  DATA_AUTHENTICATION_SET_AUTHENTICATION: type<'DATA_AUTHENTICATION_SET_AUTHENTICATION'>('DATA_AUTHENTICATION_SET_AUTHENTICATION'),
  DATA_AUTHENTICATION_CLEAR_AUTHENTICATION: type<'DATA_AUTHENTICATION_CLEAR_AUTHENTICATION'>('DATA_AUTHENTICATION_CLEAR_AUTHENTICATION'),
  DATA_WINES_ADD: type<'DATA_WINES_ADD'>('DATA_WINES_ADD'),
  DATA_WINES_REMOVE: type<'DATA_WINES_REMOVE'>('DATA_WINES_REMOVE'),
  DATA_WINES_UPDATE: type<'DATA_WINES_UPDATE'>('DATA_WINES_UPDATE'),
  DATA_WINES_UPDATE_RATE: type<'DATA_WINES_UPDATE_RATE'>('DATA_WINES_UPDATE_RATE'),
  DATA_WINES_UPDATE_STOCK: type<'DATA_WINES_UPDATE_STOCK'>('DATA_WINES_UPDATE_STOCK'),
  DATA_WINES_SET_ALL: type<'DATA_WINES_SET_ALL'>('DATA_WINES_SET_ALL'),
  APPLICATION_ENABLE_BUSY_FLAG: type<'APPLICATION_ENABLE_BUSY_FLAG'>('APPLICATION_ENABLE_BUSY_FLAG'),
  APPLICATION_DISABLE_BUSY_FLAG: type<'APPLICATION_DISABLE_BUSY_FLAG'>('APPLICATION_DISABLE_BUSY_FLAG'),
  APPLICATION_TOGGLE_SIDEBAR: type<'APPLICATION_TOGGLE_SIDEBAR'>('APPLICATION_TOGGLE_SIDEBAR')
};

// typesafe actions
export class SetAuthenticationAction {
  type = ActionTypes.DATA_AUTHENTICATION_SET_AUTHENTICATION;
  payload: { authenticationResult: AuthenticationResult };

  constructor(authenticationResult: AuthenticationResult) {
    this.payload = { authenticationResult };
  }
}

export class ClearAuthenticationAction {
  type = ActionTypes.DATA_AUTHENTICATION_CLEAR_AUTHENTICATION;
}

export class AddWineAction {
  type = ActionTypes.DATA_WINES_ADD;
  payload: { wine: Wine };

  constructor(wine: Wine) {
    this.payload = { wine };
  }
}

export class RemoveWineAction {
  type = ActionTypes.DATA_WINES_REMOVE;
  payload: { id: string };

  constructor(id: string) {
    this.payload = { id };
  }
}

export class UpdateWineAction {
  type = ActionTypes.DATA_WINES_UPDATE;
  payload: { id: string, wine: Wine };

  constructor(id: string, wine: Wine) {
    this.payload = { id, wine };
  }
}

export class UpdateRateWineAction {
  type = ActionTypes.DATA_WINES_UPDATE_RATE;
  payload: { id: string, myRating: number };

  constructor(id: string, myRating: number) {
    this.payload = { id, myRating };
  }
}

export class UpdateStockWineAction {
  type = ActionTypes.DATA_WINES_UPDATE_STOCK;
  payload: { id: string, inStock: number };

  constructor(id: string, inStock: number) {
    this.payload = { id, inStock };
  }
}

export class SetAllWinesAction {
  type = ActionTypes.DATA_WINES_SET_ALL;
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
