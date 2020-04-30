import gameControlReducer from '../../reducers/game-control-reducer';

describe('gameControlReducer', () => {
  let action;
  test('Should return default state if no action type is specified', () => {
  });
  
  
  test('Should return updated state when a correct guess is made', () => {
    action = {
      type: 'GUESS',
      displayWord: ['h','e','l','l','o'],
      secretWord: ['h', 'l', 'l', 'o'],
      correctLetters: ['e'],
      missedLetters: [],
      currentDiagram: 0
    }

    expect(gameControlReducer({
      displayWord: ['h','e','l','l','o'],
      secretWord: ['h','e','l','l','o'],
      correctLetters: [],
      missedLetters: [],
      currentDiagram: 0}, action)).toEqual({
      displayWord: ['h','e','l','l','o'],
      secretWord: ['h', 'l', 'l', 'o'],
      correctLetters: ['e'],
      missedLetters: [],
      currentDiagram: 0
    });
  });

  test('Should return updated state when incorrect guess is made', () => {
    action = {
      type: 'GUESS',
      displayWord: ['h','e','l','l','o'],
      secretWord: ['h','e','l','l','o'],
      correctLetters: [],
      missedLetters: ['p'],
      currentDiagram: 1
    }

    expect(gameControlReducer({
      displayWord: ['h','e','l','l','o'],
      secretWord: ['h','e','l','l','o'],
      correctLetters: [],
      missedLetters: [],
      currentDiagram: 0}, action)).toEqual({
      displayWord: ['h','e','l','l','o'],
      secretWord: ['h','e','l','l','o'],
      correctLetters: [],
      missedLetters: ['p'],
      currentDiagram: 1
    });
  });
});