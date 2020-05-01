import * as c from './ActionTypes';

export const correctGuess = (guess) => {
  const { secretWord, correctLetters, char } = guess;
  return {
    type: c.CORRECT_GUESS,
    secretWord: secretWord.filter(x => x !== char),
    correctLetters: [...correctLetters, char]
  }
}

export const wrongGuess = (guess) => {
  const { missedLetters, currentDiagram, char } = guess;
  return {
    type: c.WRONG_GUESS,
    missedLetters: [...missedLetters, char],
    currentDiagram: currentDiagram
  }
}

export const newGame = () => {
  return {
    type: c.NEW_GAME,
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