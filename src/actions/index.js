export const correctGuess = (guess) => {
  const { secretWord, correctLetters, missedLetters, currentDiagram, char } = guess;
  return {
    type: 'GUESS',
    secretWord: secretWord.filter(x => x !== char),
    correctLetters: correctLetters.push(char),
    missedLetters: missedLetters,
    currentDiagram: currentDiagram
  }
}

export const wrongGuess = (guess) => {
  const { secretWord, correctLetters, missedLetters, currentDiagram, char } = guess;
  return {
    type: 'GUESS',
    secretWord: secretWord,
    correctLetters: correctLetters,
    missedLetters: missedLetters.push(char),
    currentDiagram: currentDiagram + 1
  }
}