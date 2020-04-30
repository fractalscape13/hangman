import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
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
    default:
      return state;
  }
};