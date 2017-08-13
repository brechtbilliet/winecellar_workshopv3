import { applicationReducer } from './reducers/application.reducer';
import { winesReducer } from './reducers/wines.reducer';
import { authenticationReducer } from './reducers/authentication.reducer';
import { combineReducers } from '@ngrx/store';

export const rootReducer = {
  data: combineReducers({
    authentication: authenticationReducer,
    wines: winesReducer
  }),
  application: applicationReducer
};
