import gameControlReducer from '../../reducers/game-control-reducer';

describe('gameControlReducer', () => {

  test('Should return default state if no action type is specified', () => {
    expect(gameControlReducer({}, {type:null})).toEqual({});
  });
});