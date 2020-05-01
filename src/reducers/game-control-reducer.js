import * as c from './../actions/ActionTypes';
import InitialState from '../components/InitialState';

let initializeState = {
  displayWord: [],
  secretWord: [],
  win: false,
  lose: false,
  correctLetters: [],
  missedLetters: [],
  currentDiagram: 0
}

export default (state=initializeState, action) => {
  const { displayWord, secretWord, correctLetters, missedLetters, currentDiagram } =  action;
  switch (action.type) {
    case c.GUESS:
      return Object.assign({}, state, {
        displayWord: displayWord,
        secretWord: secretWord,
        correctLetters: correctLetters,
        missedLetters: missedLetters,
        currentDiagram: currentDiagram
      });
      case c.SET_WORD:
        const secret = InitialState[Math.floor(Math.random()*(InitialState.length+1))].split('');
        return Object.assign({}, state, {
          displayWord: secret,
          secretWord: secret,
          currentDiagram: 0
        })
    default:
      return state;
  }
};