import * as c from '../actions/ActionTypes';
import SecretWordList from '../components/SecretWordList';

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
  const { secretWord, correctLetters, missedLetters, currentDiagram } =  action;
  switch (action.type) {
    case c.CORRECT_GUESS:
      return Object.assign({}, state, {
        secretWord: secretWord,
        correctLetters: correctLetters
    });
    case c.WRONG_GUESS:
      return Object.assign({}, state, {
        missedLetters: missedLetters,
        currentDiagram: currentDiagram + 1
    });
    case c.SET_WORD:
        const secret = SecretWordList[Math.floor(Math.random()*(SecretWordList.length))].split('');
        return Object.assign({}, state, {
          displayWord: secret,
          secretWord: secret,
          currentDiagram: 0
    });
    case c.NEW_GAME:
      return Object.assign({}, state, {
        displayWord: [],
        secretWord: [],
        win: false,
        lose: false,
        correctLetters: [],
        missedLetters: [],
        currentDiagram: 0
    });
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
};