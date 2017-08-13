import { applicationReducer } from './reducers/application.reducer';
import { winesReducer } from './reducers/wines.reducer';
import { authenticationReducer } from './reducers/authentication.reducer';

export const rootReducer = {
  authentication: authenticationReducer,
  wines: winesReducer,
  application: applicationReducer
};

