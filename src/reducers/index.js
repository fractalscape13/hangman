import { combineReducers } from 'redux';
import gameControlReducer from './game-control-reducer';
import winStateReducer from './win-state-reducer';

const rootReducer = combineReducers({
  winState : winStateReducer,
  gameState: gameControlReducer
});

export default rootReducer;