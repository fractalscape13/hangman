import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { displayWord, secretWord, win, lose, correctLetters, missedLetters, currentDiagram} = action;
  switch (action.type) {
    case c.NEW_GAME:
      return Object.assign({}, state, {
        displayWord: [],
        secretWord: [],
        win: false,
        lose: false,
        correctLetters: [],
        missedLetters: [],
        currentDiagram: 0
      })
    case c.WIN_GAME:
      return Object.assign({}, state, {
        win: win, 
      });
    case c.LOSE_GAME:
      return Object.assign({}, state, {
        lose: lose
      });
    default: 
      return state; 
  }
}