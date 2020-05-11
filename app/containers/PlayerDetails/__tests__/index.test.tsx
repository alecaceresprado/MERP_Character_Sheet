import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import 'jest-styled-components';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';

import PlayerDetails from '../index';
import { IntlProvider } from 'react-intl';
import { HelmetProvider } from 'react-helmet-async';
import { AppActions } from 'state/app';
import configureStore from 'configureStore';
import history from 'utils/history';

jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: '1' })
}));

jest.mock('state/app/app.actions');

const renderPlayerDetails = store =>
  render(
    <Provider store={store}>
      <IntlProvider locale="en">
        <HelmetProvider>
          <PlayerDetails />
        </HelmetProvider>
      </IntlProvider>
    </Provider>
  );

describe('<PlayerDetails />', () => {
  let store;
  const mockedLoadPlayerDetails = AppActions.loadPlayerDetail as jest.Mock;

  beforeAll(() => {
    // loadRepos is mocked so that we can spy on it but also so that it doesn't trigger a network request
    mockedLoadPlayerDetails.mockImplementation(() => ({ type: '' }));
  });

  beforeEach(() => {
    store = configureStore({}, history);
    mockedLoadPlayerDetails.mockClear();
  });

  afterEach(cleanup);

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = renderPlayerDetails(store);
    expect(firstChild).toMatchSnapshot();
  });
});
