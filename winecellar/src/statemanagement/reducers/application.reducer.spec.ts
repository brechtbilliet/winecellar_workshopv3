import { applicationReducer } from './application.reducer';
import { ApplicationState } from '../state';
import { DisableBusyFlagAction, EnableBusyFlagAction, ToggleSidebarAction } from '../actions';

const deepfreeze = require('deep-freeze');

describe('reducer: containers > applicationReducer', () => {
  describe('case APPLICATION_ENABLE_BUSY_FLAG', () => {
    it('should return a new applicationstate with the isBusyflag to true', () => {
      const initialState: ApplicationState = {
        isBusy: false,
        sidebarCollapsed: false
      };
      deepfreeze(initialState);
      const changedState = applicationReducer(initialState, new EnableBusyFlagAction());
      expect(initialState).not.toBe(changedState);
      expect(changedState.isBusy).toBe(true);
    });
  });
  describe('case APPLICATION_DISABLE_BUSY_FLAG', () => {
    it('should return a new applicationstate with the isBusyflag to true', () => {
      const initialState: ApplicationState = {
        isBusy: false,
        sidebarCollapsed: false
      };
      deepfreeze(initialState);
      const changedState = applicationReducer(initialState, new DisableBusyFlagAction());
      expect(initialState).not.toBe(changedState);
      expect(changedState.isBusy).toBe(false);
    });
  });
  describe('case APPLICATION_TOGGLE_SIDEBAR', () => {
    it('should return a new state with a different isCollapsed value', () => {
      const initialState: ApplicationState = {
        isBusy: false,
        sidebarCollapsed: false
      };
      deepfreeze(initialState);
      let changedState = applicationReducer(initialState, new ToggleSidebarAction());
      expect(changedState).not.toBe(initialState);
      expect(changedState.sidebarCollapsed).toBe(true);
      changedState = applicationReducer(changedState, new ToggleSidebarAction());
      expect(changedState.sidebarCollapsed).toBe(false);

    });
  });
  describe('case default', () => {
    it('should return the exact same reference as before', () => {
      const initialState: ApplicationState = {
        isBusy: false,
        sidebarCollapsed: false
      };
      deepfreeze(initialState);
      const changedState: ApplicationState = applicationReducer(initialState, { type: null });
      expect(changedState).toBe(initialState);
    });
  });
});
