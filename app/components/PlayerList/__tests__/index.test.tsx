import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import PlayerList from '../index';
import configureStore from '../../../configureStore';
import history from '../../../utils/history';
import { playerList } from 'mocks';

describe('<PlayerList />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<PlayerList players={[]} loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <PlayerList
          players={[]}
          loading={false}
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>
    );
    expect(queryByText(/Something went wrong/)).toBeInTheDocument();
  });

  it('should render the repositories if loading was successful', () => {
    const initialState = {
      global: {
        error: false,
        loading: false,
        players: []
      }
    };
    const store = configureStore(initialState, history);
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <PlayerList players={playerList} error={false} loading={false} />
        </IntlProvider>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(
      <PlayerList players={[]} error={false} loading={false} />
    );

    expect(container).toBeEmpty();
  });
});
