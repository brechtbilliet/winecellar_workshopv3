import { AuthenticationState } from '../state';
import { WinecellarActions } from '../actions';

export function authenticationReducer(state: AuthenticationState = {
  isAuthenticated: false,
  account: null,
  jwtToken: null
}, action: WinecellarActions): AuthenticationState {
  return state;
}
