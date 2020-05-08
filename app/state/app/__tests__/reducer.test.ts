import { appReducer, AppState } from '../app.reducer';
import { AppActions } from '../app.actions';
import { Repo } from 'models/repo.model';

describe('appReducer', () => {
  let state: AppState;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      currentUser: '',
      userData: {
        repos: [],
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  it('should handle the loadRepos action correctly', () => {
    const expectedResult = {
      currentUser: '',
      loading: true,
      error: false,
      userData: {
        repos: [],
      },
    };
    expect(appReducer(state, AppActions.loadRepos())).toEqual(expectedResult);
  });

  it('should handle the reposLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Repo',
      },
    ] as Repo[];
    const username = 'test';
    const expectedResult = {
      currentUser: username,
      loading: false,
      error: false,
      userData: {
        repos: fixture,
      },
    };
    expect(appReducer(state, AppActions.reposLoaded(fixture, username))).toEqual(
      expectedResult,
    );
  });

  it('should handle the repoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };

    const expectedResult = {
      currentUser: '',
      error: fixture,
      loading: false,
      userData: {
        repos: [],
      },
    };

    expect(appReducer(state, AppActions.repoLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
