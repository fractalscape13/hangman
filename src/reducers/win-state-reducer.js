import * as c from './../actions/ActionTypes';

let initializeState = {
  displayWord: [],
  secretWord: [],
  win: false,
  lose: false,
  correctLetters: [],
  missedLetters: [],
  currentDiagram: 0
}

export default (state = initializeState, action) => {
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
        win: true, 
      });
    case c.LOSE_GAME:
      return Object.assign({}, state, {
        lose: true
      });
    default: 
      return state; 
  }
}