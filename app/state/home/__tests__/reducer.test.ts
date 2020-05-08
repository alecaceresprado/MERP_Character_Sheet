import { homeReducer, HomeState } from '../home.reducer';
import { HomeActions } from '../home.actions';

describe('homeReducer', () => {
  let state: HomeState;
  beforeEach(() => {
    state = {
      username: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = { username: fixture };

    expect(homeReducer(state, HomeActions.changeUsername(fixture))).toEqual(expectedResult);
  });
});
