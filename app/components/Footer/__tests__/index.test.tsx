import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import Footer from '../index';
import configureStore from '../../../configureStore';
import history from '../../../utils/history';

describe('<Footer />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, history);
  });

  it('should render and match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <Provider store={store}>
          <IntlProvider locale="en">
            <Footer />
          </IntlProvider>
        </Provider>
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
});
