import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { AppActions } from 'state/app/app.actions';
import configureStore from '../../../configureStore';
import HomePage from '../index';
import history from '../../../utils/history';

jest.mock('state/app/app.actions');

const renderHomePage = store =>
  render(
    <Provider store={store}>
      <IntlProvider locale="en">
        <HelmetProvider>
          <HomePage />
        </HelmetProvider>
      </IntlProvider>
    </Provider>
  );

describe('<HomePage />', () => {
  let store;
  const mockedLoadPlayerSummary = AppActions.loadPlayersSummary as jest.Mock;

  beforeAll(() => {
    // loadRepos is mocked so that we can spy on it but also so that it doesn't trigger a network request
    mockedLoadPlayerSummary.mockImplementation(() => ({ type: '' }));
  });

  beforeEach(() => {
    store = configureStore({}, history);
    mockedLoadPlayerSummary.mockClear();
  });

  afterEach(cleanup);

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = renderHomePage(store);
    expect(firstChild).toMatchSnapshot();
  });
});
