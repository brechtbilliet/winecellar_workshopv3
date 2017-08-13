import { AuthenticationState } from '../state';
import { authenticationReducer } from './authentication.reducer';
import { ActionTypes as actions } from '../actions';

const deepfreeze = require('deep-freeze');

describe('reducer: data > authenticationReducer', () => {
  describe('case DATA_AUTHENTICATION_SET_AUTHENTICATION', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: AuthenticationState = {
        isAuthenticated: false,
        jwtToken: '',
        account: null
      };
      const payload: any = { token: 'token', firstName: 'firstname', lastName: 'lastname', login: 'login' };
      deepfreeze(initialState);
      const changedState: AuthenticationState =
        authenticationReducer(initialState, { type: actions.DATA_AUTHENTICATION_SET_AUTHENTICATION, payload });
      expect(changedState).not.toBe(initialState);
      expect(changedState.jwtToken).toEqual(payload.token);
      expect(changedState.account.firstName).toEqual(payload.firstName);
      expect(changedState.account.lastName).toEqual(payload.lastName);
      expect(changedState.account.login).toEqual(payload.login);
    });
  });
  describe('case DATA_AUTHENTICATION_CLEAR_AUTHENTICATION', () => {
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
      const changedState: AuthenticationState =
        authenticationReducer(initialState, { type: actions.DATA_AUTHENTICATION_CLEAR_AUTHENTICATION });
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
