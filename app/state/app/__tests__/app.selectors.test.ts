import {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectPlayersSummary
} from '../app.selectors';
import { ApplicationRootState } from '../../../types';
import { PlayerSummary } from 'models';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState
    } as ApplicationRootState;
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoading', () => {
  it('should select the loading', () => {
    const loadingSelector = makeSelectLoading();
    const loading = false;
    const mockedState: any = {
      global: {
        loading
      }
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectLocation', () => {
  it('should select location', () => {
    const locationSelector = makeSelectLocation();
    const location = 'location';
    const mockedState: any = {
      router: {
        location
      }
    };
    expect(locationSelector(mockedState)).toEqual(location);
  });
});

describe('makeSelectError', () => {
  it('should select the error', () => {
    const errorSelector = makeSelectError();
    const error = 404;
    const mockedState: any = {
      global: {
        error
      }
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectPlayersSummary', () => {
  it('should select the players', () => {
    const reposSelector = makeSelectPlayersSummary();
    const players: PlayerSummary[] = [];
    const mockedState = {
      global: {
        players: players
      }
    } as ApplicationRootState;
    expect(reposSelector(mockedState)).toEqual(players);
  });
});

describe('makeSelectLocation', () => {
  it('should select the location', () => {
    const locationStateSelector = makeSelectLocation();
    const router = {
      location: { pathname: '/foo' }
    };
    const mockedState: any = {
      router
    };
    expect(locationStateSelector(mockedState)).toEqual(router.location);
  });
});
