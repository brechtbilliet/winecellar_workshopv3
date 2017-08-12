import { applicationReducer } from './reducers/application.reducer';
import { winesReducer } from './reducers/wines.reducer';
import { authenticationReducer } from './reducers/authentication.reducer';
import { combineReducers } from '@ngrx/store';

const dataReducer = combineReducers({
  authentication: authenticationReducer,
  wines: winesReducer
});

export function rootReducer(state: any, action: any) {
  return combineReducers({
    data: dataReducer,
    application: applicationReducer
  })(state, action);
}

