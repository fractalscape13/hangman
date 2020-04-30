import * as c from './ActionTypes';

export const correctGuess = (guess) => {
  const { secretWord, correctLetters, missedLetters, currentDiagram, char } = guess;
  return {
    type: c.GUESS,
    secretWord: secretWord.filter(x => x !== char),
    correctLetters: correctLetters.push(char),
    missedLetters: missedLetters,
    currentDiagram: currentDiagram
  }
}

export const wrongGuess = (guess) => {
  const { secretWord, correctLetters, missedLetters, currentDiagram, char } = guess;
  return {
    type: c.GUESS,
    secretWord: secretWord,
    correctLetters: correctLetters,
    missedLetters: missedLetters.push(char),
    currentDiagram: currentDiagram + 1
  }
}

export const newGame = () => {
  // const { displayWord, secretWord, secretWord, win, lose, correctLetters, missedLetters, currentDiagram } = game;
  return {
    type: c.NEW_GAME,
    // displayWord: displayWord,
    // secretWord: secretWord,
    // win: win,
    // lose: lose,
    // correctLetters: correctLetters,
    // missedLetters: missedLetters,
    // currentDiagram: currentDiagram
  }
}

export const setWord = () => {
  return {
    type: c.SET_WORD
  }
}

export const winGame = () => {
  return {
    type: c.WIN_GAME,
    win : true
  }
}

export const loseGame = () => {
  return {
    type: c.LOSE_GAME,
    lose : true
  }
}