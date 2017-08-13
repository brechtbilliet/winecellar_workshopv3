import { ApplicationState } from '../state';
import { WinecellarActions } from '../actions';

export function applicationReducer(state: ApplicationState = {
  isBusy: false,
  sidebarCollapsed: false
}, action: WinecellarActions): ApplicationState {
  return state;
}
