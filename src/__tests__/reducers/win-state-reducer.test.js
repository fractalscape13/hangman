import winStateReducer from '../../reducers/win-state-reducer';
import * as c from '../../actions/ActionTypes';


describe('winStateReducer', () => {
  let action;

  test('Should set/reset state to new game status', () => {
    action = {
      type: c.NEW_GAME,
      displayWord: [],
      secretWord: [],
      correctLetters: [],
      missedLetters: [],
      win: false,
      lose: false,
      currentDiagram: 0
    };

    expect(winStateReducer({
      secretWord: ['h'],
      correctLetters: ['e','l','o'],
      missedLetters: ['w','r','t','y','u','i','p'],
      win: false,
      lose: true,
      currentDiagram: 7}, action)).toEqual({
      displayWord: [],
      secretWord: [],
      correctLetters: [],
      missedLetters: [],
      win: false,
      lose: false,
      currentDiagram: 0
    });
  });

  test('Should set win state to true', () => {
    action = {
      type: c.WIN_GAME,
      // displayWord: [],
      // secretWord: [],
      // correctLetters: [],
      // missedLetters: [],
      win: true,
      // lose: false,
      // currentDiagram: 0
    };

    expect(winStateReducer({
      displayWord: [],
      secretWord: [],
      correctLetters: [],
      missedLetters: [],
      win: false,
      lose: false,
      currentDiagram: 5}, action)).toEqual({
      displayWord: [],
      secretWord: [],
      correctLetters: [],
      missedLetters: [],
      win: true,
      lose: false,
      currentDiagram: 5
    });
  })
  test('Should set lose state to true', () => {
    action = {
      type: c.LOSE_GAME,
      displayWord: [],
      secretWord: [],
      correctLetters: [],
      missedLetters: [],
      win: false,
      lose: true,
      currentDiagram: 0
    };

    expect(winStateReducer({
      displayWord: [],
      secretWord: [],
      correctLetters: [],
      missedLetters: [],
      win: false,
      lose: false,
      currentDiagram: 0}, action)).toEqual({
      displayWord: [],
      secretWord: [],
      correctLetters: [],
      missedLetters: [],
      win: false,
      lose: true,
      currentDiagram: 0
    });
  })
});