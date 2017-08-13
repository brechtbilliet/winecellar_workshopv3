import { Wine } from '../../stock/types/Wine';
import { winesReducer } from './wines.reducer';
import { ActionTypes as actions, AddWineAction, SetAllWinesAction } from '../actions';

const deepfreeze = require('deep-freeze');

describe('reducer > data', () => {
  describe('case DATA_WINES_ADD', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: Array<Wine> = [];
      initialState.push(new Wine('initiaial', 'wine'));
      const wine = new Wine();
      deepfreeze(initialState);
      const changedState: Array<Wine> = winesReducer(initialState, new AddWineAction(wine));
      expect(changedState).not.toBe(initialState);
      expect(changedState.length).toBe(2);
      expect(changedState[1]).toBe(wine);
    });
  });
  describe('case DATA_WINES_SET_ALL', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: Array<Wine> = [];
      const wines = [new Wine(), new Wine(), new Wine()];
      deepfreeze(initialState);
      const changedState: Array<Wine> = winesReducer(initialState, new SetAllWinesAction(wines));
      expect(changedState).not.toBe(initialState);
      wines.forEach((wine: Wine, index: number) => {
        expect(wine).toBe(changedState[index]);
      });
    });
  });
  describe('case DATA_WINES_REMOVE', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: Array<Wine> = [new Wine(), new Wine(), new Wine()];
      initialState[0]._id = 'fakeid1';
      initialState[1]._id = 'fakeid2';
      initialState[2]._id = 'fakeid3';
      deepfreeze(initialState);
      const changedState: Array<Wine> = winesReducer(initialState, {
        type: actions.DATA_WINES_REMOVE,
        payload: { _id: initialState[0]._id }
      });
      expect(changedState).not.toBe(initialState);
      expect(changedState.length).toBe(2);
      expect(changedState.filter((wine: Wine) => wine._id === initialState[0]._id).length).toBe(0);
    });
  });
  describe('case DATA_WINES_UPDATE', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: Array<Wine> = [new Wine(), new Wine(), new Wine()];
      initialState[0]._id = 'fakeid1';
      initialState[1]._id = 'fakeid2';
      initialState[2]._id = 'fakeid3';
      const updateWine: Wine = Object.assign({}, initialState[0], {
        name: 'updated'
      });
      deepfreeze(initialState);
      const changedState: Array<Wine> = winesReducer(initialState, {
        type: actions.DATA_WINES_UPDATE,
        payload: { _id: initialState[0]._id, wine: updateWine }
      });
      expect(changedState).not.toBe(initialState);
      expect(changedState[0]).not.toBe(initialState[0]);
      expect(changedState[0]).not.toBe(updateWine);
      expect(changedState[0]).toEqual(updateWine);
    });
  });
  describe('case DATA_WINES_UPDATE_RATE', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: Array<Wine> = [new Wine(), new Wine(), new Wine()];
      initialState[0]._id = 'fakeid1';
      initialState[1]._id = 'fakeid2';
      initialState[2]._id = 'fakeid3';
      const newRating = 5;
      deepfreeze(initialState);
      const changedState: Array<Wine> = winesReducer(initialState, {
        type: actions.DATA_WINES_UPDATE_RATE,
        payload: { _id: initialState[0]._id, myRating: newRating }
      });
      expect(changedState).not.toBe(initialState);
      expect(changedState[0]).not.toBe(initialState[0]);
      expect(changedState[0].myRating).toBe(newRating);
    });
  });
  describe('case DATA_WINES_UPDATE_STOCK', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: Array<Wine> = [new Wine(), new Wine(), new Wine()];
      initialState[0]._id = 'fakeid1';
      initialState[1]._id = 'fakeid2';
      initialState[2]._id = 'fakeid3';
      const newInStock = 5;
      deepfreeze(initialState);
      const changedState: Array<Wine> = winesReducer(initialState, {
        type: actions.DATA_WINES_UPDATE_STOCK,
        payload: { _id: initialState[0]._id, inStock: newInStock }
      });
      expect(changedState).not.toBe(initialState);
      expect(changedState[0]).not.toBe(initialState[0]);
      expect(changedState[0].inStock).toBe(newInStock);
    });
  });
  describe('case default', () => {
    it('should return the same state', () => {
      const initialState: Array<Wine> = [new Wine(), new Wine(), new Wine()];
      deepfreeze(initialState);
      const changedState: Array<Wine> = winesReducer(initialState, { type: null });
      expect(changedState).toBe(initialState);
    });
  });
});
