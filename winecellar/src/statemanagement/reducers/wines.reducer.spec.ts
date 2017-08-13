import { Wine } from '../../stock/types/Wine';
import { winesReducer } from './wines.reducer';
import {
  AddWineAction,
  RemoveWineAction,
  SetAllWinesAction,
  UpdateRateWineAction,
  UpdateStockWineAction,
  UpdateWineAction
} from '../actions';

const deepfreeze = require('deep-freeze');

describe('reducer > data', () => {
  describe('case DATA_WINES_ADD', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: Array<Wine> = [new Wine('initial', 'wine')];
      deepfreeze(initialState);
      const wine = new Wine();
      const changedState = winesReducer(initialState, new AddWineAction(wine));
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
      const changedState = winesReducer(initialState, new SetAllWinesAction(wines));
      expect(changedState).not.toBe(initialState);
      wines.forEach((wine: Wine, index: number) => {
        expect(wine).toBe(changedState[index]);
      });
    });
  });
  describe('case DATA_WINES_REMOVE', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: Array<Wine> = [
        { ...new Wine(), _id: 'fakeid1' },
        { ...new Wine(), _id: 'fakeid2' },
        { ...new Wine(), _id: 'fakeid3' }];
      deepfreeze(initialState);
      const idToRemove = initialState[0]._id;
      const changedState = winesReducer(initialState, new RemoveWineAction(idToRemove));
      expect(changedState).not.toBe(initialState);
      expect(changedState.length).toBe(2);
      expect(changedState.filter((wine: Wine) => wine._id === idToRemove).length).toBe(0);
    });
  });
  describe('case DATA_WINES_UPDATE', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: Array<Wine> = [
        { ...new Wine(), _id: 'fakeid1' },
        { ...new Wine(), _id: 'fakeid2' },
        { ...new Wine(), _id: 'fakeid3' }];

      deepfreeze(initialState);
      const updatedWine = { ...initialState[0], name: 'updated' };
      const changedState = winesReducer(initialState, new UpdateWineAction(updatedWine._id, updatedWine));
      expect(changedState).not.toBe(initialState);
      expect(changedState[0]).not.toBe(initialState[0]);
      expect(changedState[0]).not.toBe(updatedWine);
      expect(changedState[0]).toEqual(updatedWine);
    });
  });
  describe('case DATA_WINES_UPDATE_RATE', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: Array<Wine> = [
        { ...new Wine(), _id: 'fakeid1' },
        { ...new Wine(), _id: 'fakeid2' },
        { ...new Wine(), _id: 'fakeid3' }];

      const newRating = 5;
      const idToUpdate = initialState[0]._id;
      deepfreeze(initialState);
      const changedState = winesReducer(initialState, new UpdateRateWineAction(idToUpdate, newRating));
      expect(changedState).not.toBe(initialState);
      expect(changedState[0]).not.toBe(initialState[0]);
      expect(changedState[0].myRating).toBe(newRating);
    });
  });
  describe('case DATA_WINES_UPDATE_STOCK', () => {
    it('should return a new instance with the correct state', () => {
      const initialState: Array<Wine> = [
        { ...new Wine(), _id: 'fakeid1' },
        { ...new Wine(), _id: 'fakeid2' },
        { ...new Wine(), _id: 'fakeid3' }];
      deepfreeze(initialState);
      const newInStock = 5;
      const idToUpdate = initialState[0]._id;
      const changedState = winesReducer(initialState, new UpdateStockWineAction(idToUpdate, newInStock));
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
