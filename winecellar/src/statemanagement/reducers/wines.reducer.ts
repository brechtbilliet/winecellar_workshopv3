import { WinecellarActions, ActionTypes } from '../actions';
import { Wine } from '../../stock/types/Wine';

export function winesReducer(state: Wine[] = [], action: WinecellarActions): Wine[] {
  switch (action.type) {
    case ActionTypes.WINES_ADD:
      return [...state, action.payload.wine];
    case ActionTypes.WINES_SET_ALL:
      return [...action.payload.wines];
    case ActionTypes.WINES_REMOVE:
      return state.filter(item => item._id !== action.payload.id);
    case ActionTypes.WINES_UPDATE:
      return state.map(item => item._id === action.payload.id ? {...action.payload.wine} : item);
    case ActionTypes.WINES_UPDATE_RATE:
      return state.map(item => item._id === action.payload.id ? {...item, myRating: action.payload.myRating} : item);
    case ActionTypes.WINES_UPDATE_STOCK:
      return state.map(item => item._id === action.payload.id ? {...item, inStock: action.payload.inStock} : item);
    default:
      return state;
  }
}
