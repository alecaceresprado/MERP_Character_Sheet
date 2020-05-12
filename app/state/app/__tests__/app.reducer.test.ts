import { appReducer, AppState, appInitialState } from '../app.reducer';
import { AppActions } from '../app.actions';
import { PlayerSummary } from 'models';
import { characters } from 'mocks';

describe('appReducer', () => {
  let state: AppState;

  beforeEach(() => {
    state = { ...appInitialState };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  it('should handle the loadPlayersSummary action correctly', () => {
    const expectedResult = {
      loading: true,
      error: false,
      players: []
    };
    expect(appReducer(state, AppActions.loadPlayersSummary())).toEqual(
      expectedResult
    );
  });

  it('should handle the playersSummaryLoaded action correctly', () => {
    const fixture = [
      {
        id: 'id',
        description: 'description1',
        avatarUrl: 'avatarUrl',
        name: 'name1'
      }
    ] as PlayerSummary[];
    const expectedResult = {
      loading: false,
      error: state.error,
      players: fixture
    };
    expect(appReducer(state, AppActions.playersSummaryLoaded(fixture))).toEqual(
      expectedResult
    );
  });

  it('should handle the playersSummaryLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found'
    };

    const expectedResult = {
      loading: false,
      error: fixture,
      players: []
    };

    expect(
      appReducer(state, AppActions.playersSummaryLoadingError(fixture))
    ).toEqual(expectedResult);
  });


  it('should handle the playerDetailsLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found'
    };

    const expectedResult = {
      loading: false,
      error: fixture,
      players: []
    };

    expect(
      appReducer(state, AppActions.playerDetailsLoadingError(fixture))
    ).toEqual(expectedResult);
  });

  it('should handle the playerDetailsLoaded action correctly', () => {
    const expectedResult = {
      loading: false,
      error: false,
      players: [],
      player: characters[0]
    };

    expect(
      appReducer(state, AppActions.playerDetailsLoaded(characters[0]))
    ).toEqual(expectedResult);
  });
});
