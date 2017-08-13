import { AuthenticationState } from '../state';
import { ActionTypes, WinecellarActions } from '../actions';

export function authenticationReducer(state: AuthenticationState = {
  isAuthenticated: false,
  account: null,
  jwtToken: null
}, action: WinecellarActions): AuthenticationState {
  switch (action.type) {
    case ActionTypes.DATA_AUTHENTICATION_SET_AUTHENTICATION:
      const authenticationResult = action.payload.authenticationResult;
      return {
        isAuthenticated: true,
        jwtToken: authenticationResult.token,
        account: {
          firstName: authenticationResult.firstName,
          lastName: authenticationResult.lastName,
          login: authenticationResult.login
        }
      };
    case ActionTypes.DATA_AUTHENTICATION_CLEAR_AUTHENTICATION:
      return {
        isAuthenticated: false,
        jwtToken: null,
        account: null
      };
    default:
      return state;
  }
}
