import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import gameControlReducer from '../../reducers/game-control-reducer';
import winStateReducer from '../../reducers/win-state-reducer';

let store = createStore(rootReducer);

describe ("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      winState: {},
      gameState: {}
    });
  });

  test('Check that initail state of gameControlReducer matches root reducer', () => {
    expect(store.getState().gameState).toEqual(gameControlReducer(undefined, {type:null}));
  });
  
  test('Check that initial state of winStateReducer matches root reducer', () => {
    expect(store.getState().winState).toEqual(winStateReducer(undefined, {type:null}));
  });
});