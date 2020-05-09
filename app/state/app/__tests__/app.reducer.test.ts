import { appReducer, AppState, appInitialState } from '../app.reducer';
import { AppActions } from '../app.actions';
import { PlayerSummary } from 'models';

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

  it('should handle the repoLoadingError action correctly', () => {
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
});
