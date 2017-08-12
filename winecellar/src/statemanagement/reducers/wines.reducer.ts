import { WinecellarActions } from '../actions';
import { Wine } from '../../stock/types/Wine';

export function winesReducer(state: Wine[] = [], action: WinecellarActions): Wine[] {
  return state;
}
