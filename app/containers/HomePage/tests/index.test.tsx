/**
 * Test the HomePage
 */

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import { AppActions } from 'state/app/app.actions';
import { HelmetProvider } from 'react-helmet-async';

import configureStore from '../../../configureStore';
import HomePage from '../index';
import { homeInitialState } from 'state/home/home.reducer';
import { HomeActions } from 'state/home/home.actions';
import history from '../../../utils/history';

jest.mock('containers/App/actions');

const renderHomePage = store =>
  render(
    <Provider store={store}>
      <IntlProvider locale="en">
        <HelmetProvider>
          <HomePage />
        </HelmetProvider>
      </IntlProvider>
    </Provider>,
  );

describe('<HomePage />', () => {
  let store;
  const mockedLoadRepos = AppActions.loadRepos as jest.Mock;

  beforeAll(() => {
    // loadRepos is mocked so that we can spy on it but also so that it doesn't trigger a network request
    mockedLoadRepos.mockImplementation(() => ({ type: '' }));
  });

  beforeEach(() => {
    store = configureStore({}, history);
    mockedLoadRepos.mockClear();
  });

  afterEach(cleanup);

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderHomePage(store);
    expect(firstChild).toMatchSnapshot();
  });

  it('shouldn`t fetch repos on mount (if username is empty)', () => {
    renderHomePage(store);
    expect(homeInitialState.username).toBe('');
    expect(AppActions.loadRepos).not.toHaveBeenCalled();
  });

  it('shouldn`t fetch repos if the form is submitted when the username is empty', () => {
    const { container } = renderHomePage(store);

    const form = container.querySelector('form')!;
    fireEvent.submit(form);

    expect(AppActions.loadRepos).not.toHaveBeenCalled();
  });

  it('should fetch repos if the form is submitted when the username isn`t empty', () => {
    const { container } = renderHomePage(store);

    store.dispatch(HomeActions.changeUsername('julienben'));

    const input = container.querySelector('input')!;
    fireEvent.change(input, { target: { value: 'julienben' } });
    expect(AppActions.loadRepos).not.toHaveBeenCalled();

    const form = container.querySelector('form')!;
    fireEvent.submit(form);
    expect(AppActions.loadRepos).toHaveBeenCalled();
  });
});
