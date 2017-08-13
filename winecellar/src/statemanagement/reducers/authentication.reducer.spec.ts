import { AuthenticationState } from '../state';
import { authenticationReducer } from './authentication.reducer';
import { ClearAuthenticationAction, SetAuthenticationAction } from '../actions';
import { AuthenticationResult } from '../../authentication/types/AuthenticationResult';

const deepfreeze = require('deep-freeze');

describe('reducer: authenticationReducer', () => {
  describe('case AUTHENTICATION_SET_AUTHENTICATION', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: AuthenticationState = {
        isAuthenticated: false,
        jwtToken: '',
        account: null
      };
      const authenticationResult: AuthenticationResult = {
        token: 'token',
        firstName: 'firstname',
        lastName: 'lastname',
        login: 'login'
      };
      deepfreeze(initialState);
      const changedState = authenticationReducer(initialState, new SetAuthenticationAction(authenticationResult));
      expect(changedState).not.toBe(initialState);
      expect(changedState.jwtToken).toEqual(authenticationResult.token);
      expect(changedState.account.firstName).toEqual(authenticationResult.firstName);
      expect(changedState.account.lastName).toEqual(authenticationResult.lastName);
      expect(changedState.account.login).toEqual(authenticationResult.login);
    });
  });
  describe('case AUTHENTICATION_CLEAR_AUTHENTICATION', () => {
    it('should return a new instance with the state cleared', () => {
      const initialState: AuthenticationState = {
        isAuthenticated: true,
        jwtToken: 'token',
        account: {
          firstName: 'firstName',
          lastName: 'lastName',
          login: 'login'
        }
      };
      deepfreeze(initialState);
      const changedState: AuthenticationState = authenticationReducer(initialState, new ClearAuthenticationAction());
      expect(changedState).not.toBe(initialState);
      expect(changedState.isAuthenticated).toBe(false);
    });
  });
  describe('case default', () => {
    it('should return the same state', () => {
      const initialState: AuthenticationState = {
        isAuthenticated: true,
        jwtToken: 'token',
        account: {
          firstName: 'firstName',
          lastName: 'lastName',
          login: 'login'
        }
      };
      deepfreeze(initialState);
      const changedState: AuthenticationState = authenticationReducer(initialState, { type: null });
      expect(changedState).toBe(initialState);
    });
  });
});
