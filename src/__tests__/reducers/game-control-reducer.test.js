import gameControlReducer from '../../reducers/game-control-reducer';
import * as c from '../../actions/ActionTypes';

describe('gameControlReducer', () => {
  let action;
  test('Should return default state if no action type is specified', () => {
  });
  
  
  test('Should return updated state when a correct guess is made', () => {
    action = {
      type: c.GUESS,
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
      type: c.GUESS,
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

  // test('Should return state with new display and secret word', () =>{
  //   action = {
  //     type: c.SET_WORD,
  //     displayWord: ['w','o','r','l','d'],
  //     secretWord: ['w','o','r','l','d'],
  //   }

  //   expect(gameControlReducer({
  //     displayWord: [],
  //     secretWord: [],
  //     correctLetters: [],
  //     missedLetters: [],
  //     win: false,
  //     lose: false,
  //     currentDiagram: 0}, action)).toEqual({
  //     displayWord: ['w','o','r','l','d'],
  //     secretWord: ['w','o','r','l','d'],
  //     correctLetters: [],
  //     missedLetters: [],
  //     win: false,
  //     lose: false,
  //     currentDiagram: 0
  //     })
  // })
});