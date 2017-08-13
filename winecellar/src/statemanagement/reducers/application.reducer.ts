import { ApplicationState } from '../state';
import { ActionTypes, WinecellarActions } from '../actions';

export function applicationReducer(state: ApplicationState = {
  isBusy: false,
  sidebarCollapsed: false
}, action: WinecellarActions): ApplicationState {
  switch (action.type) {
    case ActionTypes.APPLICATION_TOGGLE_SIDEBAR:
      return {...state, sidebarCollapsed: !state.sidebarCollapsed};
    case ActionTypes.APPLICATION_DISABLE_BUSY_FLAG:
      return {...state, isBusy: false};
    case ActionTypes.APPLICATION_ENABLE_BUSY_FLAG:
      return {...state, isBusy: true};
    default:
      return state;
  }
}
